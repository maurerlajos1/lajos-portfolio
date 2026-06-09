const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Group by description
const descriptionGroups = {};

for (const item of data) {
    if (!item.description) continue;
    
    // Normalize description to avoid minor whitespace differences
    const normDesc = item.description.trim().toLowerCase();
    
    if (!descriptionGroups[normDesc]) {
        descriptionGroups[normDesc] = [];
    }
    descriptionGroups[normDesc].push(item);
}

console.log("=== DUPLICATE DESCRIPTIONS FOUND ===\n");
let dupCount = 0;

for (const [desc, items] of Object.entries(descriptionGroups)) {
    if (items.length > 1) {
        dupCount++;
        console.log(`[Duplicate Group ${dupCount}] (${items.length} items)`);
        console.log(`Description: "${items[0].description}"`);
        console.log("URLs:");
        items.forEach(i => console.log(`  - ${i.url}`));
        console.log("--------------------------------------------------\n");
    }
}

if (dupCount === 0) {
    console.log("No duplicate descriptions found!");
} else {
    console.log(`Found ${dupCount} groups of items with identical descriptions.`);
}
