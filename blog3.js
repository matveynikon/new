const puppeteer = require('puppeteer');
var k = 1;
var z = 0;
var v = 2000;
var x = Math.floor(Math.random() * 6000 + 105000);
var j = 86400000 / (v) - x;
var l = x / 14000;
var k = 1;
async function start() {
  const url = 'https://matveynikon.wixsite.com/dailyhero/post/the-ocean-clean-up';
  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  });  
  for(var k = 1; k < 2000000; k++){
    const page = await browser.newPage();
    await page.waitFor(100000)
    await page.goto(url);
    await page.setViewport({ width: 1000, height: 900});
    await page.waitFor(15000);
    await page.close()  
  }
browser.close();
}
start();
