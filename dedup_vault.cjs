const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const uniqueData = [];
const seenUrls = new Set();

for (const item of data) {
    if (!seenUrls.has(item.url)) {
        seenUrls.add(item.url);
        uniqueData.push(item);
    }
}

fs.writeFileSync(filePath, JSON.stringify(uniqueData, null, 2), 'utf8');
console.log(`Deduplication complete. Removed ${data.length - uniqueData.length} duplicates. New total: ${uniqueData.length}`);
