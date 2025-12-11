#!/usr/bin/env node
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^['"](.*)['"]$/, '$1');
      process.env[key] = value;
    }
  });
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Score an item based on completeness of data
function scoreItem(item) {
  let score = 0;
  
  // Prefer items with quantity
  if (item.quantity != null && item.quantity > 0) score += 100;
  
  // Prefer items with description
  if (item.description) score += 50;
  
  // Prefer items with day_rate
  if (item.day_rate != null) score += 30;
  
  // Prefer items with images
  if (item.images && item.images.length > 0) score += 20;
  
  // Prefer items with detailed_description
  if (item.detailed_description && item.detailed_description.length > 0) score += 15;
  
  // Prefer items with specifications
  if (item.specifications && item.specifications.length > 0) score += 10;
  
  // Prefer items with flex_item_id
  if (item.flex_item_id) score += 5;
  
  // Use creation date as tiebreaker (newer is better)
  if (item._createdAt) {
    const timestamp = new Date(item._createdAt).getTime();
    score += timestamp / 1e15; // Add fractional score based on timestamp
  }
  
  return score;
}

async function findAndRemoveDuplicates(dryRun = true) {
  try {
    console.log('🔍 Fetching all equipment items...\n');
    
    // Get all equipment items
    const allItems = await client.fetch(
      `*[_type == "equipment"] {
        _id,
        _createdAt,
        name,
        category,
        quantity,
        description,
        detailed_description,
        day_rate,
        images,
        specifications,
        flex_item_id
      }`
    );
    
    console.log(`Found ${allItems.length} total equipment items`);
    
    // Group items by name
    const groupedByName = {};
    allItems.forEach(item => {
      const normalizedName = item.name.trim().toLowerCase();
      if (!groupedByName[normalizedName]) {
        groupedByName[normalizedName] = [];
      }
      groupedByName[normalizedName].push(item);
    });
    
    // Find duplicates
    const duplicateGroups = Object.entries(groupedByName)
      .filter(([_, items]) => items.length > 1);
    
    console.log(`\n📊 Found ${duplicateGroups.length} groups with duplicates\n`);
    
    if (duplicateGroups.length === 0) {
      console.log('✅ No duplicates found!');
      return;
    }
    
    let totalToDelete = 0;
    const itemsToDelete = [];
    
    // Process each duplicate group
    duplicateGroups.forEach(([name, items]) => {
      console.log(`\n📦 "${items[0].name}" - ${items.length} duplicates`);
      
      // Score and sort items (highest score first)
      const scoredItems = items.map(item => ({
        item,
        score: scoreItem(item)
      })).sort((a, b) => b.score - a.score);
      
      // Keep the highest scoring item
      const itemToKeep = scoredItems[0];
      const itemsToRemove = scoredItems.slice(1);
      
      console.log(`  ✓ KEEPING: ${itemToKeep.item._id} (score: ${itemToKeep.score.toFixed(2)})`);
      console.log(`    - Quantity: ${itemToKeep.item.quantity ?? 'N/A'}`);
      console.log(`    - Category: ${itemToKeep.item.category}`);
      console.log(`    - Day Rate: ${itemToKeep.item.day_rate ? `$${itemToKeep.item.day_rate}` : 'N/A'}`);
      
      itemsToRemove.forEach(({ item, score }) => {
        console.log(`  ✗ DELETING: ${item._id} (score: ${score.toFixed(2)})`);
        console.log(`    - Quantity: ${item.quantity ?? 'N/A'}`);
        console.log(`    - Category: ${item.category}`);
        console.log(`    - Day Rate: ${item.day_rate ? `$${item.day_rate}` : 'N/A'}`);
        itemsToDelete.push(item._id);
        totalToDelete++;
      });
    });
    
    console.log(`\n\n📋 SUMMARY:`);
    console.log(`   Total duplicate groups: ${duplicateGroups.length}`);
    console.log(`   Items to delete: ${totalToDelete}`);
    console.log(`   Items to keep: ${duplicateGroups.length}`);
    console.log(`   Final count: ${allItems.length - totalToDelete}\n`);
    
    if (dryRun) {
      console.log('🔔 DRY RUN MODE - No changes made');
      console.log('   Run with --confirm flag to actually delete duplicates\n');
      return;
    }
    
    // Actually delete the duplicates
    console.log('\n🗑️  Deleting duplicates...');
    
    const batchSize = 100;
    for (let i = 0; i < itemsToDelete.length; i += batchSize) {
      const batch = itemsToDelete.slice(i, i + batchSize);
      const transaction = client.transaction();
      
      batch.forEach(id => {
        transaction.delete(id);
      });
      
      await transaction.commit();
      console.log(`   Deleted ${Math.min(i + batchSize, itemsToDelete.length)}/${itemsToDelete.length} items`);
    }
    
    console.log('\n✅ Successfully deleted all duplicates!');
    
    // Verify
    const remaining = await client.fetch(`count(*[_type == "equipment"])`);
    console.log(`\n📊 Total equipment items remaining: ${remaining}\n`);
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error);
    process.exit(1);
  }
}

// Check for --confirm flag
const confirm = process.argv.includes('--confirm');

if (!confirm) {
  console.log('═══════════════════════════════════════════════════════════');
  console.log('  SANITY EQUIPMENT DEDUPLICATION TOOL');
  console.log('  Running in DRY RUN mode (preview only)');
  console.log('═══════════════════════════════════════════════════════════\n');
}

findAndRemoveDuplicates(!confirm);



