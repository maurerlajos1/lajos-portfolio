const fs = require('fs');
const path = require('path');

const originalPath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const previewPath = path.join('C:', 'Users', 'Lajos', '.gemini', 'antigravity', 'brain', '85ff541f-84f8-41af-979b-591f40ca6d0d', 'scratch', 'vaultData_preview.json');

const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf8'));
let previewData = JSON.parse(fs.readFileSync(previewPath, 'utf8'));

const previewUrls = new Set(previewData.map(item => item.url));

const missingItems = originalData.filter(item => !previewUrls.has(item.url));

// Add a flag to the missing items so the user knows they were restored without AI updates
const restoredItems = missingItems.map(item => ({
    ...item,
    _note: "RESTORED: AI scraper could not read this page (likely Google Drive, PDF, or bot-protected). Description is the original one."
}));

previewData = previewData.concat(restoredItems);

fs.writeFileSync(previewPath, JSON.stringify(previewData, null, 2), 'utf8');

console.log(`Restored ${restoredItems.length} missing items.`);
console.log(`Total items in preview file: ${previewData.length}`);
