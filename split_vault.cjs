const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const outputDir = path.join('C:', 'Users', 'Lajos', '.gemini', 'antigravity', 'brain', '85ff541f-84f8-41af-979b-591f40ca6d0d', 'scratch');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const numChunks = 6;
const chunkSize = Math.ceil(data.length / numChunks);

for (let i = 0; i < numChunks; i++) {
    const chunk = data.slice(i * chunkSize, (i + 1) * chunkSize);
    const outputPath = path.join(outputDir, `vault_chunk_${i + 1}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(chunk, null, 2), 'utf8');
    console.log(`Created chunk ${i + 1} with ${chunk.length} items.`);
}
