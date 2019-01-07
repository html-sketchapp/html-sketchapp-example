/* eslint-env node, jest */
/* global page */

const makeScreenshot = async name => {
  await page.screenshot({path: `./screenshots/${name}.png`});
};

module.exports = {
  makeScreenshot
};
