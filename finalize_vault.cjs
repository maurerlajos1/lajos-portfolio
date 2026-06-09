const fs = require('fs');
const path = require('path');

const originalPath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const previewPath = path.join('C:', 'Users', 'Lajos', '.gemini', 'antigravity', 'brain', '85ff541f-84f8-41af-979b-591f40ca6d0d', 'scratch', 'vaultData_preview.json');

const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf8'));
const previewData = JSON.parse(fs.readFileSync(previewPath, 'utf8'));

// Create a map of the AI-updated items
const aiUpdates = new Map();
for (const item of previewData) {
    if (item.description_hu && !item._note) {
        aiUpdates.set(item.url, item);
    }
}

let updatedCount = 0;

// Update the original data without deleting ANY items
const finalData = originalData.map(item => {
    if (aiUpdates.has(item.url)) {
        const aiItem = aiUpdates.get(item.url);
        updatedCount++;
        return {
            ...item,
            description: aiItem.description,
            description_hu: aiItem.description_hu
        };
    }
    // For failed/deleted links, keep the exact original item
    return item;
});

// Overwrite the live vaultData.json
fs.writeFileSync(originalPath, JSON.stringify(finalData, null, 2), 'utf8');

console.log(`Successfully merged! Total items: ${finalData.length} (Original: ${originalData.length})`);
console.log(`Updated ${updatedCount} items with new AI descriptions.`);
console.log(`Left ${finalData.length - updatedCount} items with their original descriptions.`);
