const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
// const {baseUrl, cookieName, cookieDomain} = require('./settings.js');

// if (process.argv.length < 3) {
//   throw new Error('Please provide input URL');
// }

// const users = require('./user_data');
const {URL} = require('url');

// const url = process.argv[2];
const outputFile = '../page.asketch.json';

puppeteer.launch({headless: false}).then(async browser => {
  const page = await browser.newPage();

  // await page.setCookie({
  //   'value': 'OxlQwlQrp-BsKkefuAjgZ9DIHzbHxpS4c4kRzYTuBQw%3D',
  //   'domain': 'brainly.pl',
  //   'name': 'Zadanepl_cookie[Token][Long]'
  // });

  // await page.setCookie({
  //   'value': 'EXkwIH3Z3Dl_G9m8m78A9iWsGwX5cWVBfP1JGzdsX5U%3D',
  //   'domain': 'codetest.z-dn.net',
  //   'name': 'Zadanepl_cookie[Token][Long]'
  // });

  await page.authenticate({username: 'staging', password: 'IdQUaMsyRMBO'});

  // await page.goto(new URL('https://brainly.pl/app/brainlyplus'));
  await page.goto(new URL('https://brainly.pl/zadanie/15150694'));
  await page.setViewport({width: 1480, height: 1803});
  // await page.reload();
  // await page.reload();
  // await page.reload();
  // await page.reload();
  // await page.waitFor(5000);

  // await page.click('.js-use-free-preview-button');
  // await page.reload();
  // await page.click('.js-use-free-preview-button');
  // await page.reload();
  // await page.click('.js-use-free-preview-button');
  // await page.reload();
  // // await page.evaluate(() => document.querySelector('.js-payments-premium-button .sg-button-primary'));
  // await page.waitForSelector('.js-payments-premium-button .sg-button-primary');
  // await page.click('.js-payments-premium-button .sg-button-primary');
  // await page.waitFor(10000);
  // await page.waitForSelector('.brn-payments-splash-screen__content .sg-link');
  await page.waitFor(5000);
  await page.waitForSelector(
    '.sg-button-secondary.sg-button-secondary--dark.sg-button-secondary--small.js-register-trigger'
  );
  await page.click(
    '.sg-button-secondary.sg-button-secondary--dark.sg-button-secondary--small.js-register-trigger'
  );
  await page.waitFor(5000);
  await page.click('[data-test="authorization-form"] .sg-button-primary--dark');
  await page.waitFor(5000);
  await page.type('[type="email"]', 'patrycja.radaczynska@brainly.com');
  await page.waitFor(5000);
  await page.click(
    '.sg-button-primary.sg-button-primary--full-width.sg-button-primary--dark'
  );
  await page.waitFor(5000);
  await page.type('[type="text"]', 'pradadalada');
  await page.type('[type="password"]', 'dev123');
  // await page.evaluate(() => {
  //   document.querySelector('select option:nth-child(2)').selected = true;
  // })

  await page.select('select[name="month"]', '07');
  await page.select('select[name="day"]', '13');
  await page.select('select[name="year"]', '1983');
  await page.waitFor(5000);
  await page.click('.sg-checkbox__element');
  await page.waitFor(5000);
  await page.click(
    '.sg-button-primary.sg-button-primary--full-width.sg-button-primary--dark'
  );
  await page.setViewport({width: 480, height: 1803});
  await page.waitFor(5000);

  // await page.setViewport({width: 480, height: 1803});

  // await page.evaluate(() => document.querySelector('.brn-payments-splash-screen__content .sg-link'));
  // await page.waitFor(10000);
  // await page.waitForSelector('[data-test="show-payments-flow-from-unlock-section"]');
  // await page.click('[data-test="show-payments-flow-from-unlock-section"]');
  // await page.waitFor(10000);
  // await page.waitForSelector('[data-test="rate-plan-semi-annual"]');
  // await page.click('[data-test="rate-plan-semi-annual"]');
  // await page.type('[data-test="add-answer-box"] .js-test-editor-textarea', '1.Definitely I will go early to bed tonight 2.Tomorrow I might go shopping 3.Definitely I won’t watch the horror film 4.Probably I won’t finish this essay today 5.Probably I will email some friends this evening');

  // // await page.setViewport({width: 480, height: 1803});
  // await page.waitFor(10000);
  // await page.click(button);

  // let buttonsText = await page.evaluate(() => {
  //   let data = [];
  //   let elements = document.getElementsByClassName('sg-button-primary--dark-inverse');

  //   for (var element of elements)
  //       data.push(element.textContent);
  //   return data;
  // });
  // console.log(button);
  // await page.click(button);
  // const button = await page.waitForSelector('.js-video-ad-show-video');
  // await page.click(divs[2].HTMLButtonElement);
  // await page.waitFor(10000);

  // await page.waitForSelector('#newOffers .sg-button-primary');
  // await page.waitForSelector('.js-video-ad-show-video');

  // const button = await page.evaluate(() => document.querySelectorAll('.sg-button-primary'));
  // await page.waitFor(10000);
  // console.log(button)
  // console.log(button);
  // await page.click('.sg-button-primary');
  // await page.waitFor(1000);

  // await page.click('.sg-button-primary-round');
  // await page.waitFor(10000);
  //ASK QUESTION
  // await page.click('[data-test="trigger-add-answer"]');
  // await page.waitForSelector('[data-test="add-answer-box"]');

  // await page.type('[data-test="add-answer-box"] .js-test-editor-textarea', '1.Definitely I will go early to bed tonight 2.Tomorrow I might go shopping 3.Definitely I won’t watch the horror film 4.Probably I won’t finish this essay today 5.Probably I will email some friends this evening');
  // await page.waitFor(750);
  // await page.waitForSelector('[data-test="add-answer-button"]');
  // await page.waitFor(1000);
  // await page.click('[data-test="add-answer-button"]');
  // await page.waitFor(10000);
  // await page.waitForSelector('.js-answer-content');

  await page.addScriptTag({
    path: './build/page2layers.bundle.js'
  });

  // JSON.parse + JSON.stringify hack is only needed until
  // https://github.com/GoogleChrome/puppeteer/issues/1510 is fixed
  const asketchPageJSONString = await page.evaluate(
    'JSON.stringify(page2layers.run())'
  );

  fs.writeFileSync(path.resolve(__dirname, outputFile), asketchPageJSONString);

  browser.close();
});
