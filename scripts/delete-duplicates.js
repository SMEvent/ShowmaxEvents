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

async function deleteDuplicates() {
  try {
    console.log('Finding equipment items without quantities...');
    
    // Get all equipment without quantity
    const itemsToDelete = await client.fetch(
      `*[_type == "equipment" && quantity == null]._id`
    );
    
    console.log(`Found ${itemsToDelete.length} items to delete`);
    
    if (itemsToDelete.length === 0) {
      console.log('No duplicates to delete!');
      return;
    }
    
    console.log('Deleting duplicates...');
    
    // Delete in batches of 100
    const batchSize = 100;
    for (let i = 0; i < itemsToDelete.length; i += batchSize) {
      const batch = itemsToDelete.slice(i, i + batchSize);
      const transaction = client.transaction();
      
      batch.forEach(id => {
        transaction.delete(id);
      });
      
      await transaction.commit();
      console.log(`Deleted ${Math.min(i + batchSize, itemsToDelete.length)}/${itemsToDelete.length} items`);
    }
    
    console.log('✅ Successfully deleted all duplicate items without quantities!');
    
    // Verify
    const remaining = await client.fetch(
      `count(*[_type == "equipment"])`
    );
    console.log(`Total equipment items remaining: ${remaining}`);
    
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

deleteDuplicates();






