// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async (filePath) => {
//     try {
//         const pathToExtension = path.join(process.cwd(), 'extension');
//         const browser = await puppeteer.launch({
//             headless: false,
//             devtools: true,
//             slowMo: 2000,
//             console: true,
//             //dumpio: true,
//             args: [
//                 `--disable-extensions-except=${pathToExtension}`,
//                 `--load-extension=${pathToExtension}`
//             ]
//         });

//         const websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);
//         const apiCounts = new Map();
//         const page = await browser.newPage();
//         let noEntriesWebsites = [];

//         for (const website of websiteList) {
//             try {
//                 console.log(`Visiting website: ${website}`);
//                 await page.goto(website, { waitUntil: 'networkidle0' });
//                 //await page.goto(website);
//                 const entries = await page.evaluate(() => {
//                     if (typeof window === 'undefined') {
//                         throw new Error('window is undefined');
//                     }
//                     return window.entries;
//                 });

//                 if (entries) {
//                     for (let i = 0; i < entries.length; i++) {
//                         const api = entries[i][0];
//                         if (!apiCounts.has(api)) {
//                             apiCounts.set(api, []);
//                         }
//                         apiCounts.get(api).push({
//                             website,
//                             count: entries[i][1] || 0
//                         });
//                     }
//                 } else {
//                     console.error(`Error navigating to ${website}: entries is undefined`);
//                     noEntriesWebsites.push(website);
//                 }
//             } catch (error) {
//                 console.error(`Error visiting ${website}: ${error.message}`);
//                 noEntriesWebsites.push(website);
//             }
//         }

//         let csvResult = 'Website,' + Array.from(apiCounts.keys()).join(',') + '\n';

//         for (const website of websiteList) {
//             let row = `"${website}"`;
//             for (const [api, apiData] of apiCounts) {
//                 const websiteData = apiData.find(data => data.website === website);
//                 row += `,${websiteData ? websiteData.count : 0}`;
//             }
//             csvResult += row + '\n';
//         }

//         fs.writeFileSync('entries_log2.csv', csvResult);
//         fs.writeFileSync('no_entries_log2.csv', noEntriesWebsites.join('\n'));
//         console.log(`Websites without entries: ${noEntriesWebsites.join(', ')}`);
//         await browser.close();
//     } catch (error) {
//         console.error(`Error running script: ${error.message}`);
//     }
// };
// runScriptOnWebsites('top_1m.txt');

////////////// use the below code on websites which have timeout issues///////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async (filePath) => {
//     try {
//         const pathToExtension = path.join(process.cwd(), 'extension');
//         const browser = await puppeteer.launch({
//             headless: false,
//             devtools: true,
//             slowMo: 1000,
//             args: [
//                 `--disable-extensions-except=${pathToExtension}`,
//                 `--load-extension=${pathToExtension}`
//             ]
//         });

//         const websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);
//         const apiCounts = new Map();
//         let noEntriesWebsites = [];

//         for (const website of websiteList) {
//             try {
//                 console.log(`Visiting website: ${website}`);
//                 const page = await browser.newPage();
//                 await page.goto(website, { timeout: 30000 });

//                 const startTime = Date.now();
//                 const intervalId = setInterval(async () => {
//                     if (Date.now() - startTime >= 30000) {
//                         clearInterval(intervalId);
//                         const entries = await page.evaluate(() => {
//                             if (typeof window === 'undefined') {
//                                 throw new Error('window is undefined');
//                             }
//                             return window.entries;
//                         });

//                         if (entries) {
//                             for (let i = 0; i < entries.length; i++) {
//                                 const api = entries[i][0];
//                                 if (!apiCounts.has(api)) {
//                                     apiCounts.set(api, []);
//                                 }
//                                 apiCounts.get(api).push({
//                                     website,
//                                     count: entries[i][1] || 0
//                                 });
//                             }
//                         } else {
//                             console.error(`Error navigating to ${website}: entries is undefined`);
//                             noEntriesWebsites.push(website);
//                         }
//                         await page.close();
//                     }
//                 }, 1000);
//             } catch (error) {
//                 console.error(`Error visiting ${website}: ${error.message}`);
//                 noEntriesWebsites.push(website);
//             }
//         }

//         let csvResult = 'Website,' + Array.from(apiCounts.keys()).join(',') + '\n';

//         for (const website of websiteList) {
//             let row = `"${website}"`;
//             for (const [api, apiData] of apiCounts) {
//                 const websiteData = apiData.find(data => data.website === website);
//                 row += `,${websiteData ? websiteData.count : 0}`;
//             }
//             csvResult += row + '\n';
//         }


//         fs.writeFileSync('entries_log2.csv', csvResult);
//         fs.writeFileSync('no_entries_log2.csv', noEntriesWebsites.join('\n'));
//         console.log(`Websites without entries: ${noEntriesWebsites.join(', ')}`);
//         await browser.close();
//     } catch (error) {
//         console.error(`Error running script: ${error.message}`);
//     }
// };
// runScriptOnWebsites('top_1m.txt');

//closes after 30 seconds of waiting and collecting API data, regardless of whether the API data has been collected successfully or not

// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async (filePath) => {
//     try {
//         const pathToExtension = path.join(process.cwd(), 'extension');
//         const browser = await puppeteer.launch({
//             headless: false,
//             devtools: true,
//             slowMo: 1000,
//             args: [
//                 `--disable-extensions-except=${pathToExtension}`,
//                 `--load-extension=${pathToExtension}`
//             ]
//         });

//         const websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);
//         const apiCounts = new Map();
//         let noEntriesWebsites = [];

//         for (const website of websiteList) {
//             try {
//                 console.log(`Visiting website: ${website}`);
//                 const page = await browser.newPage();
//                 await page.goto(website, { timeout: 30000 });

//                 const startTime = Date.now();
//                 const intervalId = setInterval(async () => {
//                     if (Date.now() - startTime >= 10000) {
//                         clearInterval(intervalId);
//                         const entries = await page.evaluate(() => {
//                             if (typeof window === 'undefined') {
//                                 throw new Error('window is undefined');
//                             }
//                             return window.entries;
//                         });

//                         if (entries) {
//                             for (let i = 0; i < entries.length; i++) {
//                                 const api = entries[i][0];
//                                 if (!apiCounts.has(api)) {
//                                     apiCounts.set(api, []);
//                                 }
//                                 apiCounts.get(api).push({
//                                     website,
//                                     count: entries[i][1] || 0
//                                 });
//                             }
//                         } else {
//                             console.error(`Error navigating to ${website}: entries is undefined`);
//                             noEntriesWebsites.push(website);
//                         }
//                         await page.close();
//                     }
//                 }, 1000);
//             } catch (error) {
//                 console.error(`Error visiting ${website}: ${error.message}`);
//                 noEntriesWebsites.push(website);
//             }
//         }

//         let csvResult = 'Website,' + Array.from(apiCounts.keys()).join(',') + '\n';

//         for (const website of websiteList) {
//             let row = `"${website}"`;
//             for (const [api, apiData] of apiCounts) {
//                 const websiteData = apiData.find(data => data.website === website);
//                 row += `,${websiteData ? websiteData.count : 0}`;
//             }
//             csvResult += row + '\n';
//         }


//         fs.writeFileSync('entries_log2.csv', csvResult);
//         fs.writeFileSync('no_entries_log2.csv', noEntriesWebsites.join('\n'));
//         console.log(`Websites without entries: ${noEntriesWebsites.join(', ')}`);
//         await browser.close();
//     } catch (error) {
//         console.error(`Error running script: ${error.message}`);
//     }
// };
// runScriptOnWebsites('top_1m.txt');

///////////////////////////
///////////////////////////
//////////////////////////

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const runScriptOnWebsites = async (filePath) => {
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

        const websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);
        const apiCounts = new Map();
        let noEntriesWebsites = [];

        for (const website of websiteList) {
            try {
                console.log(`Visiting website: ${website}`);
                const page = await browser.newPage();
                await page.goto(website, { timeout: 30000 });

                const startTime = Date.now();
                const intervalId = setInterval(async () => {
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
                        await page.close();
                    }
                }, 1000);
            } catch (error) {
                console.error(`Error visiting ${website}: ${error.message}`);
                noEntriesWebsites.push(website);
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
                fs.writeFileSync('mal_entries_log1.csv', csvResult);
                fs.writeFileSync('mal_no_entries_log1.csv', noEntriesWebsites.join('\n'));
                console.log(`Websites without entries: ${noEntriesWebsites.join(', ')}`);
            }
        }
        await browser.close();

        
    } catch (error) {
        console.error(`Error running script: ${error.message}`);
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

        fs.writeFileSync('mal_entries_log1.csv', csvResult);
        fs.writeFileSync('mal_no_entries_log1.csv', noEntriesWebsites.join('\n'));
        console.log(`Websites without entries: ${ noEntriesWebsites.join(', ')} `);
    }
};
runScriptOnWebsites('top_1m.txt');