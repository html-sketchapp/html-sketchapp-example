const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  throw new Error('Please provide input URL');
}

const url = process.argv[2];
const outputFile = '../page.asketch.json';

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();

  await page.setViewport({width: 800, height: 600});
  await page.goto(url, {
    waitUntil: 'networkidle',
    networkIdleInflight: 5
  });

  await page.injectFile('./build/page2layers.bundle.js');
  const asketchPageJSON = await page.evaluate('page2layers.run()');

  fs.writeFileSync(path.resolve(__dirname, outputFile), JSON.stringify(asketchPageJSON));

  browser.close();
});
