const puppeteer = require('puppeteer');

const url = process.argv[2];
if (!url) {
    throw "Please provide URL as a first argument";
}
async function run () {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('a.PromoPack__StyledImageContainer-sc-1wff2oc-6.drmOe');
    // await page.screenshot({path: 'screenshot.png'});
    // const packages = await page.$$('a.PromoPack__StyledImageContainer-sc-1wff2oc-6.drmOe');
    const package = await page.$$('a.PromoPack__StyledImageContainer-sc-1wff2oc-6.drmOe');
    console.log(package.length);
    // for(const package of packages) {
      //   const alpha = await package.$('a.PromoPack__StyledImageContainer-sc-1wff2oc-6.drmOe');
      //   alpha.click();
      // }
      // console.log(packages);
      page.click('a.PromoPack__StyledImageContainer-sc-1wff2oc-6.drmOe');
      await page.waitForSelector('a.Button__StyledButton-ig3kkl-1.ixrwrp');
      const reservePackage = await page.$$('a.Button__StyledButton-ig3kkl-1.ixrwrp');
      console.log(reservePackage.length);
      page.click('a.Button__StyledButton-ig3kkl-1.ixrwrp');

    // browser.close();
}
run();
// i have made changes in this file to test the git push branch