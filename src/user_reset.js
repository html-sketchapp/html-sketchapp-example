/* eslint-env node, jest */
/* global page */

const {baseUrl, cookieName, cookieDomain} = require('./settings.js');
const users = require('./user_data');
const {URL} = require('url');

async function logIn(user = users.user_3) {
  await logOut();

  // Log in as default user
  await page.goto(new URL('/login', baseUrl));
  await page.waitForSelector('form[action^="/login"]');
  await page.type('input[name="username"]', user.login);
  await page.type('input[name="password"]', user.password);

  await page.click('button[type="submit"]');
  await page.waitForSelector('.js-user-panel-mobile');
}

async function logOut() {
  // Log current user out
  await page.deleteCookie({name: cookieName, domain: cookieDomain});
}

module.exports = {
  logIn,
  logOut
};
