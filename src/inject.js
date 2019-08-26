const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const URL = require('url').URL;

const url = process.argv[2];
let urlObj = null;

try {
  urlObj = new URL(url);
} catch (e) {
  console.error(
    '⚠️ Please provide valid URL as a param (e.g. `npm run inject https://example.com`)'
  );
  process.exit();
}

const outputFile = `../${urlObj.hostname}.asketch.json`;

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();

  await page.setViewport({width: 1280, height: 800});
  await page.goto(url, {
    waitUntil: 'networkidle2'
  });

  await page.addScriptTag({
    path: './dist/build/page2layers.bundle.js'
  });

  const asketchPage = await page.evaluate('page2layers.run()');

  fs.writeFileSync(
    path.resolve(__dirname, outputFile),
    JSON.stringify(asketchPage)
  );

  browser.close();
});
