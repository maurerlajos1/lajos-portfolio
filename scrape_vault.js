import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src', 'data', 'vaultData.json');
const outputDir = path.join('C:', 'Users', 'Lajos', '.gemini', 'antigravity', 'brain', '85ff541f-84f8-41af-979b-591f40ca6d0d', 'scratch');
const outputPath = path.join(outputDir, 'scrapedVaultData.json');

const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

async function scrapeUrl(url) {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch(url, { 
            signal: controller.signal,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) return { error: `HTTP ${response.status}` };
        
        const html = await response.text();
        const $ = cheerio.load(html);
        
        // Remove scripts, styles, and navs
        $('script, style, nav, footer, iframe, noscript').remove();
        
        const title = $('title').text().trim();
        const description = $('meta[name="description"]').attr('content') || '';
        
        // Get all text from body
        let rawText = $('body').text().replace(/\s+/g, ' ').trim();
        
        return {
            title: title.substring(0, 100),
            meta: description.substring(0, 200),
            content: rawText.substring(0, 2000) // First 2000 chars is plenty for AI to understand the page
        };
    } catch (error) {
        return { error: error.name === 'AbortError' ? 'Timeout' : error.message };
    }
}

async function main() {
    console.log(`Starting to scrape ${data.length} URLs...`);
    const results = [];
    const BATCH_SIZE = 15;
    
    for (let i = 0; i < data.length; i += BATCH_SIZE) {
        const batch = data.slice(i, i + BATCH_SIZE);
        const promises = batch.map(async (item) => {
            const scrapedData = await scrapeUrl(item.url);
            return {
                ...item,
                scrapedTitle: scrapedData.title || '',
                scrapedContent: scrapedData.content || '',
                isDead: !!scrapedData.error,
                errorReason: scrapedData.error || ''
            };
        });
        
        const batchResults = await Promise.all(promises);
        results.push(...batchResults);
        console.log(`Processed ${results.length}/${data.length} URLs...`);
    }
    
    // Split into 6 chunks
    const numChunks = 6;
    const chunkSize = Math.ceil(results.length / numChunks);

    for (let i = 0; i < numChunks; i++) {
        const chunk = results.slice(i * chunkSize, (i + 1) * chunkSize);
        const chunkPath = path.join(outputDir, `scraped_chunk_${i + 1}.json`);
        fs.writeFileSync(chunkPath, JSON.stringify(chunk, null, 2), 'utf8');
        console.log(`Saved scraped_chunk_${i + 1}.json`);
    }

    console.log('Finished scraping everything locally!');
}

main();
