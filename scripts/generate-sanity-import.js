const pdfParse = require('pdf-parse');
const slugify = require('slugify');
const fs = require('fs');
const path = require('path');

// Category mapping from PDF categories to Sanity schema values
const categoryMap = {
  // Audio categories
  'audio': 'audio',
  'sound': 'audio',
  'pa system': 'audio',
  'microphone': 'audio',
  'mixer': 'audio',
  'speaker': 'audio',
  
  // Video categories
  'video': 'video',
  'projection': 'video',
  'projector': 'video',
  'screen': 'video',
  'led screen': 'video',
  'switching': 'video',
  'laptop': 'video',
  'camera': 'video',
  'monitor': 'video',
  'display': 'video',
  
  // Lighting categories
  'lighting': 'lighting',
  'light': 'lighting',
  'fixture': 'lighting',
  'led': 'lighting',
  'lamp': 'lighting',
  
  // Staging categories
  'staging': 'staging',
  'stage': 'staging',
  'rigging': 'staging',
  'truss': 'staging',
  'scaffold': 'staging',
  'platform': 'staging',
  
  // Accessories (default)
  'cable': 'accessories',
  'connector': 'accessories',
  'adapter': 'accessories',
  'stand': 'accessories',
  'case': 'accessories',
  'rack': 'accessories',
  'processor': 'accessories',
  'server': 'accessories',
};

/**
 * Map a category string to Sanity schema category value
 */
function mapCategory(categoryText) {
  if (!categoryText) return 'accessories';
  
  const lower = categoryText.toLowerCase().trim();
  
  // Direct match
  if (categoryMap[lower]) {
    return categoryMap[lower];
  }
  
  // Partial match
  for (const [key, value] of Object.entries(categoryMap)) {
    if (lower.includes(key) || key.includes(lower)) {
      return value;
    }
  }
  
  // Default to accessories
  return 'accessories';
}

/**
 * Extract equipment data from PDF text
 */
function extractEquipment(text) {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  const equipment = [];
  let currentCategory = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip header lines
    if (line.toLowerCase().includes('equipment inventory') || 
        line.toLowerCase().includes('showmax') ||
        line.length < 3) {
      continue;
    }
    
    // Detect category headers (usually all caps or title case, no numbers/quantities)
    // Category headers are typically short and don't contain dashes with numbers
    const isLikelyCategory = !line.match(/^\d+\s*[-–—]/) && 
                             (line.length < 50) &&
                             !line.includes('(') &&
                             !line.includes(')') &&
                             (line === line.toUpperCase() || 
                              (line.split(' ').length <= 4 && 
                               !line.match(/^\d/)));
    
    if (isLikelyCategory && !line.match(/^\d/)) {
      // Check if next line starts with a number (equipment item)
      if (i + 1 < lines.length && lines[i + 1].match(/^\d+\s*[-–—]/)) {
        currentCategory = line;
        continue;
      }
    }
    
    // Detect equipment items (start with number followed by dash)
    const equipmentMatch = line.match(/^(\d+)\s*[-–—]\s*(.+)$/);
    if (equipmentMatch) {
      const quantity = parseInt(equipmentMatch[1], 10);
      const name = equipmentMatch[2].trim();
      
      // Extract description/specs from parentheses
      let description = '';
      let cleanName = name;
      const parenMatch = name.match(/^(.+?)\s*\((.+)\)\s*$/);
      if (parenMatch) {
        cleanName = parenMatch[1].trim();
        description = parenMatch[2].trim();
      }
      
      // Determine category
      const category = currentCategory ? mapCategory(currentCategory) : mapCategory(cleanName);
      
      equipment.push({
        name: cleanName,
        quantity: quantity,
        category: category,
        description: description || '',
        originalCategory: currentCategory || '',
        fullText: name,
      });
    }
  }
  
  return equipment;
}

/**
 * Generate slug from equipment name
 */
function generateSlug(name) {
  return slugify(name, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  }).substring(0, 96);
}

/**
 * Transform equipment data to Sanity document format
 */
function transformToSanityDoc(equipment, slugTracker) {
  let baseSlug = generateSlug(equipment.name);
  let finalSlug = baseSlug;
  let counter = 1;
  
  // Ensure unique slugs
  while (slugTracker.has(finalSlug)) {
    finalSlug = `${baseSlug}-${counter}`;
    counter++;
  }
  slugTracker.add(finalSlug);
  
  return {
    _type: 'equipment',
    name: equipment.name,
    slug: {
      _type: 'slug',
      current: finalSlug,
    },
    category: equipment.category,
    description: equipment.description || undefined,
    quantity: equipment.quantity || undefined,
    featured: false,
    // Optional fields that can be added later in Sanity Studio
    images: [],
    specifications: equipment.description ? [{
      label: 'Details',
      value: equipment.description,
    }] : undefined,
  };
}

/**
 * Main function
 */
async function main() {
  try {
    console.log('Reading PDF...');
    const pdfPath = path.join(__dirname, '../seo_data/ShowmaxEquipmentInventory-Nov2025-V1.pdf');
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    
    console.log(`Extracted text from ${data.numpages} pages`);
    console.log('Extracting equipment data...');
    
    const equipment = extractEquipment(data.text);
    console.log(`Found ${equipment.length} equipment items`);
    
    // Group by category for summary
    const byCategory = {};
    equipment.forEach(item => {
      if (!byCategory[item.category]) {
        byCategory[item.category] = 0;
      }
      byCategory[item.category]++;
    });
    
    console.log('\nEquipment by category:');
    Object.entries(byCategory).forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count} items`);
    });
    
    console.log('\nTransforming to Sanity format...');
    const slugTracker = new Set();
    const sanityDocs = equipment.map(item => transformToSanityDoc(item, slugTracker));
    
    // Generate NDJSON (newline-delimited JSON)
    const ndjson = sanityDocs.map(doc => JSON.stringify(doc)).join('\n');
    
    const outputPath = path.join(__dirname, '../seo_data/equipment-import.ndjson');
    fs.writeFileSync(outputPath, ndjson, 'utf8');
    
    console.log(`\n✅ Successfully generated ${sanityDocs.length} equipment documents`);
    console.log(`📄 Output file: ${outputPath}`);
    console.log('\nTo import into Sanity, run:');
    console.log(`  sanity dataset import ${outputPath} production`);
    
    // Show first few items as sample
    console.log('\n--- Sample items (first 5) ---');
    sanityDocs.slice(0, 5).forEach((doc, idx) => {
      console.log(`${idx + 1}. ${doc.name} (${doc.category})`);
    });
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();

