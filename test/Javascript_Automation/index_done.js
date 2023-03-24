const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const runScriptOnWebsites = async (filePath) => {
    const apiCounts = new Map();
    let noEntriesWebsites = [];
    let websiteList = [];

    try {
        const pathToExtension = path.join(process.cwd(), 'extension');
        const browser = await puppeteer.launch({
            headless: false,
            devtools: true,
            slowMo: 1000,
            args: [
                `--disable-extensions-except=${pathToExtension}`,
                `--load-extension=${pathToExtension}`
            ]
        });

        websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);

        const page = await browser.newPage();
        for (const website of websiteList) {
            let intervalId;
            try {
                console.log(`Visiting website: ${website}`);
                await page.goto(website, { timeout: 30000 });

                const startTime = Date.now();
                intervalId = setInterval(async () => {
                    if (Date.now() - startTime >= 10000) {
                        clearInterval(intervalId);
                        const entries = await page.evaluate(() => {
                            if (typeof window === 'undefined') {
                                throw new Error('window is undefined');
                            }
                            return window.entries;
                        });

                        if (entries) {
                            for (let i = 0; i < entries.length; i++) {
                                const api = entries[i][0];
                                if (!apiCounts.has(api)) {
                                    apiCounts.set(api, []);
                                }
                                apiCounts.get(api).push({
                                    website,
                                    count: entries[i][1] || 0
                                });
                            }
                        } else {
                            console.error(`Error navigating to ${website}: entries is undefined`);
                            noEntriesWebsites.push(website);
                        }
                        await page.goto('about:blank');
                    }
                }, 1000);
            } catch (error) {
                console.error(`Error visiting ${website}: ${error.message}`);
                noEntriesWebsites.push(website);
            } finally {
                clearInterval(intervalId);
            }
        };
        await browser.close();
    } catch (error) {
        console.error(`Error runningscript: ${error.message}`);
    } finally {
        let csvResult = 'Website,' + Array.from(apiCounts.keys()).join(',') + '\n';
        for (const website of websiteList) {
            let row = `"${website}"`;
            for (const [api, apiData] of apiCounts) {
                const websiteData = apiData.find(data => data.website === website);
                row += `,${websiteData ? websiteData.count : 0}`;
            }
            csvResult += row + '\n';
        }

        fs.writeFileSync('entries_log3.csv', csvResult);
        fs.writeFileSync('no_entries_log3.csv', noEntriesWebsites.join('\n'));
        console.log(`Websites without entries: ${noEntriesWebsites.join(', ')} `);
    }
};
runScriptOnWebsites('top_1m.txt');