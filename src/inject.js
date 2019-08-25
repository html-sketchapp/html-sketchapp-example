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

  await page.setViewport({width: 1280, height: 800});
  await page.goto(url, {
    waitUntil: 'networkidle2'
  });

  await page.addScriptTag({
    path: './dist/build/page2layers.bundle.js'
  });

  // JSON.parse + JSON.stringify hack is only needed until
  // https://github.com/GoogleChrome/puppeteer/issues/1510 is fixed
  const asketchPageJSONString = await page.evaluate(
    'JSON.stringify(page2layers.run())'
  );

  fs.writeFileSync(path.resolve(__dirname, outputFile), asketchPageJSONString);

  browser.close();
});
