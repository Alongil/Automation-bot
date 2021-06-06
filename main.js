const puppeteer = require('puppeteer');
const sneakerboxtlvLoginInfo = {
  email: 'Smork123@gmail.com',
  password: '0545565159'
};

const url = process.argv[2];
if (!url) {
  throw "Please provide URL as a first argument";
}
const run = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto(url);
  try {
    await page.waitForSelector('header .right-panel a .fa-user-circle').then(() => console.log("got it"));
    await page.click('header .right-panel a .fa-user-circle');
    await page.waitForSelector('#username').then(() => console.log("got it"));
    console.log(sneakerboxtlvLoginInfo);

    await page.$eval('#username', (el, sneakerboxtlvLoginInfo) => el.value = sneakerboxtlvLoginInfo, sneakerboxtlvLoginInfo.email);
    await page.$eval('#password', (el, sneakerboxtlvLoginInfo) => el.value = sneakerboxtlvLoginInfo, sneakerboxtlvLoginInfo.password);
    await page.click('#woocommerce-login-nonce ~ .woocommerce-form-login__submit');
  } catch (err) {
    console.log(err);
  }

  browser.close();
}
run();
