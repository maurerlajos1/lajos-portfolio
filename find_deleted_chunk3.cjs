const fs = require('fs');
const path = require('path');

const originalPath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const processedPath = path.join('C:', 'Users', 'Lajos', '.gemini', 'antigravity', 'brain', '85ff541f-84f8-41af-979b-591f40ca6d0d', 'scratch', 'scraped_chunk_3.json');

const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf8'));
const processedData = JSON.parse(fs.readFileSync(processedPath, 'utf8'));

// To find which chunk 3 URLs were deleted, we first need to know what URLs were originally in chunk 3.
// The split logic was: 582 items, numChunks = 6, chunkSize = 97.
// Chunk 3 is indices 194 to 290.
const chunk3Original = originalData.slice(194, 291);

const processedUrls = new Set(processedData.map(item => item.url));

const deletedItems = chunk3Original.filter(item => !processedUrls.has(item.url));

deletedItems.forEach(item => {
    console.log(`URL: ${item.url}`);
    console.log(`Title: ${item.title || item.description}`);
    console.log('---');
});
