const puppeteer = require('puppeteer');
const fs = require('fs');

const runScriptOnPage = async (page, script) => {
  const result = await page.evaluate(script => {
    // Inject the script into the page
    eval(script);
    // Wait for the script to finish running
    return new Promise(resolve => {
      setTimeout(() => {
        // Get the results of the script
        const result = window.gEntries;
        resolve(result);
      }, 10000);
    });
  }, script);
  return result;
};

const runScriptOnWebsites = async websites => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  for (const website of websites) {
    console.log(`Running script on ${website}...`);
    await page.goto(website);
    const script = await fs.promises.readFile('background.js', 'utf8');
    const result = await runScriptOnPage(page, script);
    console.log(result);
    console.log(`Finished running script on ${website}.\n`);
  }
  //await browser.close();
};

// List of websites to run the script on
const websites = ['https://www.yahoo.com', 'https://www.msn.com'];

// Run the script on the list of websites
runScriptOnWebsites(websites);
