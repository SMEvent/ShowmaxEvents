const pdfParse = require('pdf-parse');
const slugify = require('slugify');
const fs = require('fs');
const path = require('path');

// Exact category mapping from PDF headers to Sanity schema values
// Note: The PDF uses smart quotes (\u2019) not regular apostrophes (')
const pdfCategoryHeaders = {
  'LED Screen': 'led-screen',
  'Switching + Laptops': 'switching-laptops',
  'Video Projection + Screens': 'video-projection-screens',
  'LED TV Monitors': 'led-tv-monitors',
  'Cameras/Tripods/PTZ\u2019s/Recorders': 'cameras-tripods-ptzs-recorders', // Using Unicode smart quote
  'AV Accessories': 'av-accessories',
  'Audio': 'audio',
  'Wireless Mics + Clear Com': 'wireless-mics-clear-com',
  'DJ Equipment': 'dj-equipment',
  'Lighting Fixtures': 'lighting-fixtures',
  'Consoles': 'lighting-consoles',
  'Rigging': 'rigging',
  'Power Distro': 'power-distro',
  'Staging': 'staging',
  'Drapery': 'drapery',
};

/**
 * Map a category string to Sanity schema category value
 */
function mapCategory(categoryText) {
  if (!categoryText) return 'av-accessories';
  
  const trimmed = categoryText.trim();
  
  // Check exact match first
  if (pdfCategoryHeaders[trimmed]) {
    return pdfCategoryHeaders[trimmed];
  }
  
  // Check case-insensitive match
  const lower = trimmed.toLowerCase();
  for (const [key, value] of Object.entries(pdfCategoryHeaders)) {
    if (key.toLowerCase() === lower) {
      return value;
    }
  }
  
  // Default to av-accessories
  return 'av-accessories';
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
    
    // Check if this line matches any known category header (exact match)
    if (pdfCategoryHeaders[line]) {
      currentCategory = line;
      console.log(`Found category: ${line}`);
      continue;
    }
    
    // Also check for similar category names (case-insensitive and handling special characters)
    let matchedCategory = null;
    for (const categoryHeader of Object.keys(pdfCategoryHeaders)) {
      // Normalize both strings for comparison
      const normalizedLine = line.replace(/['']/g, "'"); // Normalize quotes
      const normalizedHeader = categoryHeader.replace(/['']/g, "'");
      
      if (normalizedLine === normalizedHeader) {
        matchedCategory = categoryHeader;
        break;
      }
    }
    
    if (matchedCategory) {
      currentCategory = matchedCategory;
      console.log(`Found category (normalized): ${matchedCategory}`);
      continue;
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
      const category = currentCategory ? mapCategory(currentCategory) : 'av-accessories';
      
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
    Object.entries(byCategory).sort().forEach(([cat, count]) => {
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
    console.log(`  npx sanity dataset import ${outputPath} production --replace`);
    
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
