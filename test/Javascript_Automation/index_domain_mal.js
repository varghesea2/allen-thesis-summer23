///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////fixed the output///////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const runScriptOnWebsites = async (filePath) => {
  try {
    const pathToExtension = path.join(process.cwd(), 'extension_mal');
    const websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);
    const apiCounts = new Map();
    let noEntriesWebsites = [];

    for (const website of websiteList) {
      let browser;
      try {
        browser = await puppeteer.launch({
          headless: false,
          devtools: false,
          args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
          ]
        });
      } catch (error) {
        console.error(`Error launching browser for ${website}: ${error.message}`);
        noEntriesWebsites.push(website);
        continue;
      }

      try {
        console.log(`Visiting website: ${website}`);
        const page = await browser.newPage();
        await page.goto(website, { timeout: 30000 });

        await page.waitForFunction(
          'window.entries !== undefined',
          { timeout: 10000 }
        );

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
        await browser.close();

        // Write to output files
        let csvResult = 'Website';
        const apiNames = Array.from(apiCounts.keys());
        apiNames.forEach(api => {
          csvResult += `,${api}`;
        });
        csvResult += '\n';
        
        for (const website of websiteList) {
          let row = `"${website}"`;
          apiNames.forEach(api => {
            const apiData = apiCounts.get(api);
            const websiteData = apiData.find(data => data.website === website);
            row += `,${websiteData ? websiteData.count : 0}`;
          });
          csvResult += row + '\n';
        }
        
        fs.writeFileSync('mal_entries_log_mal1.csv', csvResult);
        fs.writeFileSync('mal_no_entries_mal1.csv', noEntriesWebsites.join('\n'));
        console.log(`Websites without entries: ${noEntriesWebsites.join(', ')}`);
      } catch (error) {
        console.error(`Error visiting ${website}: ${error.message}`);
        noEntriesWebsites.push(website);
        await browser.close();
      }
    }

  } catch (error) {
    console.error(`Error running script: ${error.message}`);
  }
};

runScriptOnWebsites('malicious_phish.txt');