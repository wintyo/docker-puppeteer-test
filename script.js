const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();

  await page.goto('https://www.google.com/');
  await page.screenshot({ path: 'output/test.png', fullPage: true });

  const html = await page.content();
  fs.writeFileSync('output/test.html', html);

  browser.close();
})();
