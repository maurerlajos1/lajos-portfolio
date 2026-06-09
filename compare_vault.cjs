const fs = require('fs');
const path = require('path');

const originalPath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const previewPath = path.join('C:', 'Users', 'Lajos', '.gemini', 'antigravity', 'brain', '85ff541f-84f8-41af-979b-591f40ca6d0d', 'scratch', 'vaultData_preview.json');

const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf8'));
const previewData = JSON.parse(fs.readFileSync(previewPath, 'utf8'));

// Find items that have been updated by AI (they have description_hu but no _note)
const updatedItems = previewData.filter(item => item.description_hu && !item._note);

let count = 0;
console.log("=== COMPARISON PREVIEW ===\n");

for (const updated of updatedItems) {
    if (count >= 3) break;
    
    const original = originalData.find(o => o.url === updated.url);
    if (original && original.description !== updated.description) {
        console.log(`URL: ${updated.url}`);
        console.log(`[BEFORE] Old English: ${original.description}`);
        console.log(`[AFTER]  New English: ${updated.description}`);
        console.log(`[AFTER]  New Hungarian: ${updated.description_hu}`);
        console.log("--------------------------------------------------\n");
        count++;
    }
}
