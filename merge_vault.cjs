const fs = require('fs');
const path = require('path');

const outputDir = path.join('C:', 'Users', 'Lajos', '.gemini', 'antigravity', 'brain', '85ff541f-84f8-41af-979b-591f40ca6d0d', 'scratch');
const previewPath = path.join(outputDir, 'vaultData_preview.json');

const numChunks = 6;
let mergedData = [];

for (let i = 1; i <= numChunks; i++) {
    const chunkPath = path.join(outputDir, `scraped_chunk_${i}.json`);
    if (fs.existsSync(chunkPath)) {
        const chunkData = JSON.parse(fs.readFileSync(chunkPath, 'utf8'));
        mergedData = mergedData.concat(chunkData);
        console.log(`Loaded chunk ${i} with ${chunkData.length} items.`);
    } else {
        console.warn(`WARNING: Chunk ${i} is missing!`);
    }
}

fs.writeFileSync(previewPath, JSON.stringify(mergedData, null, 2), 'utf8');
console.log(`Successfully merged all chunks into ${previewPath}`);
console.log(`Total valid items remaining: ${mergedData.length}`);
