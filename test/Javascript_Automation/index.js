// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async websites => {
//   const pathToExtension = path.join(process.cwd(), 'extension');
//   const browser = await puppeteer.launch({
//     headless: false,
//     dumpio: true,
//     args: [
//       `--disable-extensions-except=${pathToExtension}`,
//       `--load-extension=${pathToExtension}`,
//     ],
//   });

//   //Create a CSV with a header row
//     let csv = 'URL,API,Count\n';

//     for (const website of websites) {
//       const page = await browser.newPage();
//       page.on('console', msg => console.log(msg.text()));///continious flow of data
//       await page.goto(website, { waitUntil: 'networkidle0' });
//       //await page.waitForNavigation({waitUntil: 'networkidle2' });
//       const entries = await page.evaluate(() => window.entries);
//       console.log('PAGE LOG:', entries);


//       for (let i = 0; i < entries.length; i++) {
//         const api = entries[i][0];
//         const count = entries[i][1];

//         csv += `${website},${api},${count}\n`;
//       }
//     }
//     console.log(csv);
//     fs.writeFileSync('entries_log.csv', csv);
//   };

// const websites = ['https://www.yahoo.com', 'https://www.bing.com', 'https://www.msn.com', 'https://www.facebook.com'];
// (async () => { await runScriptOnWebsites(websites) })();

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// OPENS IN SINGLE TAB ///////////////////////////////
////////////////////////////START OF CODE/////////////////////////////////////////////////

// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async websites => {
//   const pathToExtension = path.join(process.cwd(), 'extension');
//   const browser = await puppeteer.launch({
//     headless: false,
//     dumpio: true,
//     args: [
//       `--disable-extensions-except=${pathToExtension}`,
//       `--load-extension=${pathToExtension}`,
//     ],
//   });

//   // Create a CSV with a header row
//   let csv = 'URL,';
//   const apis = new Set();
//   const page = await browser.newPage();
//   page.on('console', msg => console.log(msg.text()));

//   for (const website of websites) {
//     await page.goto(website, { waitUntil: 'networkidle0' });
//     const entries = await page.evaluate(() => window.entries);

//     for (let i = 0; i < entries.length; i++) {
//       const api = entries[i][0];
//       apis.add(api);
//     }
//   }

//   for (const api of apis) {
//     csv += `${api},`;
//   }
//   csv = csv.slice(0, -1);
//   csv += '\n';

//   // Add a row for each URL
//   for (const website of websites) {
//     await page.goto(website, { waitUntil: 'networkidle0' });
//     const entries = await page.evaluate(() => window.entries);

//     csv += `${website},`;
//     for (const api of apis) {
//       let count = '';
//       for (let i = 0; i < entries.length; i++) {
//         if (entries[i][0] === api) {
//           count = entries[i][1];
//           break;
//         }
//       }
//       csv += `${count},`;
//     }
//     csv = csv.slice(0, -1);
//     csv += '\n';
//   }
//   console.log(csv);
//   fs.writeFileSync('entries_log.csv', csv);
// };

// const websites = ['https://www.yahoo.com', 'https://www.bing.com', 'https://www.msn.com', 'https://www.facebook.com','https://www.google.com',
// 'https://www.youtube.com',
// 'https://www.facebook.com',
// 'https://www.microsoft.com',
// //'https://www.akamaiedge.net',
// 'https://www.twitter.com',
// 'https://www.instagram.com',
// 'https://www.cloudflare.com',
// 'https://www.apple.com',
// 'https://www.linkedin.com',
// 'https://www.netflix.com',
// 'https://www.wikipedia.org',
// //'https://www.akamai.net',
// 'https://www.bilibili.com',
// 'https://www.live.com',
// //'https://www.gtld-servers.net',
// 'https://www.amazon.com',
// 'https://www.yahoo.com',
// 'https://www.bing.com',
// 'https://www.qq.com',
// 'https://www.azure.com'];
// //'https://www.googletagmanager.com'];
// //'https://www.l-msedge.net'];
// runScriptOnWebsites(websites);

//////////////////////////////////////END OF CODE/////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////OPEN IN MULTIPLE TABS/////////////////////////////////////////////////
///////////////////////////////START OF CODE//////////////////////////////////////////////////////

// const fs = require('fs');
// const path = require('path');
// const parse = require('csv-parse/lib/sync');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async websites => {
//   const pathToExtension = path.join(process.cwd(), 'extension');
//   const files = path.join(process.cwd());// added to check the url from text file
//   const browser = await puppeteer.launch({
//     headless: false,
//     dumpio: true,
//     args: [
//       `--disable-extensions-except=${pathToExtension}`,
//       `--load-extension=${pathToExtension}`,
//     ],
//   });

//   // Create a set to store the APIs and a map to store the counts of each API
//   const apis = new Set();
//   const apiCounts = new Map();

//   // Loop through each website and retrieve the entries from the page
//   for (const website of websites) {
//     const page = await browser.newPage();
//     page.on('console', msg => console.log(msg.text()));
//     await page.goto(website, { waitUntil: 'networkidle0' });
//     const entries = await page.evaluate(() => window.entries);

//     // Loop through each entry and update the set and map
//     for (let i = 0; i < entries.length; i++) {
//       const api = entries[i][0];
//       apis.add(api);
//       if (!apiCounts.has(api)) {
//         apiCounts.set(api, []);
//       }
//       apiCounts.get(api).push(entries[i][1]);
//     }
//   }

//   // Create the header row for the CSV
//   let csv = 'URL,';
//   for (const api of apis) {
//     csv += `${api},`;
//   }
//   csv = csv.slice(0, -1);
//   csv += '\n';

//   // Loop through each website and add a row to the CSV with the API counts
//   for (const website of websites) {
//     csv += `${website},`;
//     // for (const api of apis) {
//     //   const counts = apiCounts.get(api);
//     //   csv += `${counts.shift()},`;
//     // }
//     for (const api of apis) {
//       const counts = apiCounts.get(api);
//       const count = counts.shift() || 0;
//       csv += `${count},`;
//     }
//     csv = csv.slice(0, -1);
//     csv += '\n';
//   }

//   console.log(csv);
//   fs.writeFileSync('entries_log.csv', csv);
// };

// //const websites = ['https://www.yahoo.com', 'https://www.bing.com', 'https://www.msn.com', 'https://www.facebook.com'];
//  runScriptOnWebsites(websites);/// change it back to website




// //////////////////////////////////////END OF CODE/////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////
// // const fs = require('fs');
// // const path = require('path');
// // //const parse = require('csv-parse');
// // const {parse} = require('csv-parse/sync');
// // const puppeteer = require('puppeteer');

// // const runScriptOnWebsites = async (filePath) => {
// //   const pathToExtension = path.join(process.cwd(), 'extension');
// //   const browser = await puppeteer.launch({
// //     headless: false,
// //     dumpio: true,
// //     args: [
// //       `--disable-extensions-except=${pathToExtension}`,
// //       `--load-extension=${pathToExtension}`,
// //     ],
// //   });

// //   // Read the contents of the CSV file
// //   const csvContent = fs.readFileSync(filePath, 'utf8');

// //   // Parse the CSV into an array of records
// //   const records = parse(csvContent, {
// //     columns: true,
// //     skip_empty_lines: true,
// //     bom: true,
// //   });

// //   // Extract the list of websites from the records
// //   const websites = records.map(record => record.url);

// //   // Create a set to store the APIs and a map to store the counts of each API
// //   const apis = new Set();
// //   const apiCounts = new Map();

// //   // Loop through each website and retrieve the entries from the page
// //   for (const website of websites) {
// //     const page = await browser.newPage();
// //     page.on('console', msg => console.log(msg.text()));
// //     await page.goto(website, { waitUntil: 'networkidle0' });
// //     const entries = await page.evaluate(() => window.entries);

// //     // Loop through each entry and update the set and map
// //     for (let i = 0; i < entries.length; i++) {
// //       const api = entries[i][0];
// //       apis.add(api);
// //       if (!apiCounts.has(api)) {
// //         apiCounts.set(api, []);
// //       }
// //       apiCounts.get(api).push(entries[i][1] || 0);
// //     }
// //   }

// //   // Create the header row for the CSV
// //   let csvResult = 'URL,';
// //   for (const api of apis) {
// //     csvResult += `${api},`;
// //   }
// //   csvResult = csvResult.slice(0, -1);
// //   csvResult += '\n';

// //   // Loop through each website and add a row to the CSV with the API counts
// //   for (const website of websites) {
// //     csvResult += `${website},`;
// //     for (const api of apis) {
// //       const counts = apiCounts.get(api);
// //       csvResult += `${counts.shift()},`;
// //     }
// //     csvResult = csvResult.slice(0, -1);
// //     csvResult += '\n';
// //   }

// //   console.log(csvResult);
// //   fs.writeFileSync('entries_log.csv', csvResult);
// // };

// // runScriptOnWebsites('URLhaus.txt');


// ////////////    ///////////////////     //////////////////        ////////////////      /////////////////
// ////////////    //////////////////      //////////////////        ////////////////      ////////////////
// /////////////   /////////////////// LOADS TEXT FILE ////////////////////////////////////////////////////

// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async (filePath) => {
//   const pathToExtension = path.join(process.cwd(), 'extension');
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: [
//       `--disable-extensions-except=${pathToExtension}`,
//       `--load-extension=${pathToExtension}`,
//     ],
//   });

//   // Read the contents of the file
//   let websites = fs.readFileSync(filePath, 'utf8').split('\n').filter(line => line.trim().length > 0);

//   let visitedWebsites = [];
//   let apiCounts = new Map();

//   for (const website of websites) {
//     try {
//       const page = await browser.newPage();
//       //page.on('console', msg => console.log(msg.text()));//////// just added for console messsages
//       await page.goto(website, { waitUntil: 'networkidle0' });
//       const entries = await page.evaluate(() => window.entries);
//       //console.log('PAGE LOG:', entries);//////// just added for console messsages
//       visitedWebsites.push(website);

//       // Loop through each entry and update the map
//       if (entries) {
//         for (let i = 0; i < entries.length; i++) {
//           const api = entries[i][0];
//           if (!apiCounts.has(api)) {
//             apiCounts.set(api, []);
//           }
//           apiCounts.get(api).push({
//             website,
//             count: entries[i][1] || 0
//           });
//         }
//       } else {
//         console.error(`Error navigating to ${ website }: entries is undefined`);
//       }
//     } catch (error) {
//       console.error(`Error navigating to ${ website }: ${ error.message }`);
//     }
//   }

//   // Create the header row for the CSV
//   let csvResult = 'Website,API,Count\n';

//   // Loop through each website and add a row to the CSV with the API counts
//   for (const website of visitedWebsites) {
//     for (const [api, apiData] of apiCounts) {
//       const websiteData = apiData.find(data => data.website === website);
//       if (websiteData) {
//         csvResult += `${website},${api},${websiteData.count}\n`;
//       }
//     }
//   }

//   console.log(csvResult);
//   fs.writeFileSync('entries_log.csv', csvResult);
// };

// runScriptOnWebsites('top_1m.txt');

// ////////////    ///////////////////     //////////////////        ////////////////      /////////////////
// ////////////    //////////////////      //////////////////        ////////////////      ////////////////
// /////////////   /////////////////// LOADS CSV FILE ////////////////////////////////////////////////////


// // const fs = require('fs');
// // const path = require('path');
// // const csv = require('csv-parser');
// // const { parse } = require('csv-parse/sync');
// // const puppeteer = require('puppeteer');

// // const runScriptOnWebsites = async (filePath) => {
// //   const pathToExtension = path.join(process.cwd(), 'extension');
// //   const browser = await puppeteer.launch({
// //     headless: true,
// //     args: [
// //       `--disable-extensions-except=${pathToExtension}`,
// //       `--load-extension=${pathToExtension}`,
// //     ],
// //   });

// //   // Read the contents of the CSV file
// //   let websites = [];
// //   fs.createReadStream(filePath)
// //     .pipe(csv())
// //     .on('data', (data) => {
// //       websites.push(data.url);
// //     })
// //     .on('end', async () => {
// //       let visitedWebsites = [];
// //       let apiCounts = new Map();

// //       // Create the header row for the CSV
// //       let csvResult = 'Website,API,Count\n';

// //       for (const website of websites) {
// //         try {
// //           const page = await browser.newPage();
// //           await page.goto(website, { waitUntil: 'networkidle0' });
// //           const entries = await page.evaluate(() => window.entries);
// //           visitedWebsites.push(website);

// //           // Loop through each entry and update the map
// //           if (entries) {
// //             for (let i = 0; i < entries.length; i++) {
// //               const api = entries[i][0];
// //               if (!apiCounts.has(api)) {
// //                 apiCounts.set(api, []);
// //               }
// //               apiCounts.get(api).push({
// //                 website,
// //                 count: entries[i][1] || 0
// //               });
// //             }
// //           } else {
// //             console.error(`Error navigating to ${website}: entries is undefined`);
// //             csvResult += `${website},"Error navigating to ${website}: entries is undefined"\n`;
// //           }
// //         } catch (error) {
// //           const errorMessage = `Error navigating to ${website}: ${error.message}`;
// //           console.error(errorMessage);
// //           csvResult += `${website},${errorMessage}\n`;
// //         }
// //       }

// //       // Loop through each website and add a row to the CSV with the API counts
// //       for (const website of visitedWebsites) {
// //         for (const [api, apiData] of apiCounts) {
// //           const websiteData = apiData.find(data => data.website === website);
// //           if (websiteData) {
// //             csvResult += `${website},${api},${websiteData.count}\n`;
// //           }
// //         }
// //       }

// //       console.log(csvResult);
// //     });
// // };

// // runScriptOnWebsites('top_1m.csv');

/////////////////////////////////////////////////load entries is defined with the below code/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fs = require('fs');
// const path = require('path');
// const csv = require('csv-parser');
// const { parse } = require('csv-parse/sync');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async (filePath) => {
//   const pathToExtension = path.join(process.cwd(), 'extension');
//   const browser = await puppeteer.launch({
//     headless: true,
//     dumpio: true,
//     args: [
//       `--disable-extensions-except=${pathToExtension}`,
//       `--load-extension=${pathToExtension}`,
//     ],
//   });
//   //const files = path.join(process.cwd());
//   //const websiteFile = path.join(files, 'top_1m.txt');
//   let websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);

//   let visitedWebsites = [];
//   let apiCounts = new Map();
//   const page = await browser.newPage();
//   page.on('console', msg => console.log(msg.text()));

//   // Create a set to store the APIs and a map to store the counts of each API
//   //const apis = new Set();
//   //const apiCounts = new Map();

//   // Loop through each website and retrieve the entries from the page
//   for (const website of websiteList) {
//     try {
//       // const page = await browser.newPage();
//       // page.on('console', msg => console.log(msg.text()));
//       await page.goto(website, { waitUntil: 'networkidle0' });
//       const entries = await page.evaluate(() => window.entries);
//       visitedWebsites.push(website);

//       // Loop through each entry and update the set and map
//       if (entries) {
//         for (let i = 0; i < entries.length; i++) {
//           const api = entries[i][0];
//           if (!apiCounts.has(api)) {
//             apiCounts.set(api, []);
//           }
//           apiCounts.get(api).push({
//             website,
//             count: entries[i][1] || 0
//           });
//         }
//       } else {
//         console.error(`Error navigating to ${website}: entries is undefined`);
//       }
//     } catch (error) {
//       const errorMessage = `Error while visiting ${website}: ${error.message}`;
//       //console.error(errorMessage);
//     }
//   }

//   // header row for the CSV
//   let csvResult = 'Website,API,Count\n';

//   // Loop through each website and add a row to the CSV with the API counts
//   for (const website of websiteList) {
//     for (const [api, apiData] of apiCounts) {
//       const websiteData = apiData.find(data => data.website === website);
//       if (websiteData) {
//         csvResult += `${website},${api},${websiteData.count}\n`;
//       }
//     }
//   }

//   console.log(csv);
//   //fs.writeFileSync('entries_log.csv', csv);
//   if (typeof csv === 'string' || csv instanceof Buffer) {
//     fs.writeFileSync('entries_log.csv', csv);
//   } else {
//     console.error('Data must be a string or a buffer.');
//   }

// };

// runScriptOnWebsites('top_1m.txt');

/////////////////trying to fix the load entries issue with the below code/////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////THE BELOW CODE GIVES COLUMN ISSUES///////////////////////////////////////////

// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async (filePath) => {
//   const pathToExtension = path.join(process.cwd(), 'extension');
//   const browser = await puppeteer.launch({
//     headless: false,
//     dumpio: true,
//     args: [
//       `--disable-extensions-except=${pathToExtension}`,
//       `--load-extension=${pathToExtension}`,
//     ],
//   });

//   let websiteList = fs.readFileSync(filePath, 'utf-8');
//   websiteList = websiteList.split('\n');
//   let apiCounts = new Map();
//   const page = await browser.newPage();
//   page.on('console', msg => console.log(msg.text()));

//   for (const website of websiteList) {
//     try {
//       await page.goto(website, { waitUntil: 'networkidle0' });
//       const entries = await page.evaluate(() => window.entries);

//       if (entries) {
//         for (let i = 0; i < entries.length; i++) {
//           const api = entries[i][0];
//           if (!apiCounts.has(api)) {
//             apiCounts.set(api, []);
//           }
//           apiCounts.get(api).push({
//             website,
//             count: entries[i][1] || 0
//           });
//         }
//       } else {
//         console.error(`Error navigating to ${website}: entries is undefined`);
//       }
//     } catch (error) {
//       console.error(`Error while visiting ${website}: ${error.message}`);
//     }
//   }

//   let csvResult = 'Website,API,Count\n';

//   for (const website of websiteList) {
//     for (const [api, apiData] of apiCounts) {
//       const websiteData = apiData.find(data => data.website === website);
//       if (websiteData) {
//         csvResult += `${website},${api},${websiteData.count}\n`;
//       }
//     }
//   }

//   fs.writeFileSync('entries_log.csv', csvResult);
//   await browser.close();
// };

// runScriptOnWebsites('top_1m.txt');


/////////////////trying to fix the load entries issue with the below code/////////////////////////////////////
/////////////////////////////////CSV and JSON, BUT HAS FORMT ISSUE LIKE ABOVE////////////////////////////////////////////////


// const fs = require('fs');
// const path = require('path');
// const puppeteer = require('puppeteer');

// const runScriptOnWebsites = async (filePath) => {
//   const pathToExtension = path.join(process.cwd(), 'extension');
//   const browser = await puppeteer.launch({
//     headless: false,
//     dumpio: true,
//     args: [
//       `--disable-extensions-except=${pathToExtension}`,
//       `--load-extension=${pathToExtension}`,
//     ],
//   });

//   let websiteList = fs.readFileSync(filePath, 'utf-8').split('\n');
//   let apiCounts = new Map();
//   const page = await browser.newPage();
//   page.on('console', msg => console.log(msg.text()));

//   for (const website of websiteList) {
//     try {
//       console.log(`Visiting website: ${website}`);
//       await page.goto(website, { waitUntil: 'networkidle0' });

//       const entries = await page.evaluate(() => window.entries);

//       if (entries) {
//         for (let i = 0; i < entries.length; i++) {
//           const api = entries[i][0];
//           if (!apiCounts.has(api)) {
//             apiCounts.set(api, []);
//           }
//           apiCounts.get(api).push({
//             website,
//             count: entries[i][1] || 0
//           });
//         }
//       } else {
//         console.error(`Error navigating to ${website}: entries is undefined`);
//       }
//     } catch (error) {
//       console.error(`Error visiting ${website}: ${error.message}`);
//     } finally {
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//     }
//   }

//   let csvResult = 'Website,API,Count\n';
//   let jsonResult = [];

//   for (const [api, apiData] of apiCounts) {
//     for (const data of apiData) {
//       csvResult += `${data.website},${api},${data.count}\n`;
//       jsonResult.push({
//         website: data.website,
//         api,
//         count: data.count
//       });
//     }
//   }

//   fs.writeFileSync('entries_log.csv', csvResult);
//   fs.writeFileSync('entries_log.json', JSON.stringify(jsonResult));
// };

// runScriptOnWebsites('top_1m.txt');

/////////////////trying to fix the format issue in the above code./////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const runScriptOnWebsites = async (filePath) => {
  const pathToExtension = path.join(process.cwd(), 'extension');
  const browser = await puppeteer.launch({
    //product: 'chrome',
    //executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    //slowMo: 2000,
    devtools: true,
    console: true,
    dumpio: true,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });

  let websiteList = fs.readFileSync(filePath, 'utf-8').split('\n').filter(line => line.trim().length > 0);
  let apiCounts = new Map();
  const page = await browser.newPage();
  //page.on('console', msg => console.log(msg.text()));

  for (const website of websiteList) {
    try {
      console.log(`Visiting website: ${website}`);
      //await page.goto(website);
      await page.goto(website, { waitUntil: 'networkidle0' });
      page.on('console', msg => console.log(msg.text()));
      //const entries = await page.evaluate(() => window.entries);//comment this to run below commented code.

      const entries = await page.evaluate(() => {
        if (typeof window === 'undefined') {
          throw new Error('window is undefined');
        }
        return window.entries;
      });
      console.log(entries);
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
      }
    } catch (error) {
      console.error(`Error visiting ${website}: ${error.message}`);
    }
    //await new Promise(resolve => setTimeout(resolve, 2000));// since we are using slomo
  }

  let csvResult = 'Website,' + Array.from(apiCounts.keys()).join(',') + '\n';

  for (const website of websiteList) {
    let row = `"${website}"`;
    for (const [api, apiData] of apiCounts) {
      const websiteData = apiData.find(data => data.website === website);
      row += `,${websiteData ? websiteData.count : 0}`;
    }
    csvResult += row + '\n';
  }

  fs.writeFileSync('entries_log.csv', csvResult);
  await browser.close();
};

runScriptOnWebsites('top_1m.txt');