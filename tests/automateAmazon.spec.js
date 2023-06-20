const { test, expect } = require('@playwright/test');

// test('realme', async ({ page }) => {

//   await page.goto('https://www.amazon.in/');
//   await page.locator('//*[@id="twotabsearchtextbox"]').fill('mobile');
//   await page.locator('//*[@id="nav-search-submit-button"]').click();
//   await page.waitForLoadState('domcontentloaded');

//   await page.locator('//*[@id="p_89/realme"]/span/a/span').click();

//   const mobileNames = await page.$$eval('.a-size-medium.a-color-base.a-text-normal', elements =>
//     elements.map(element => element.textContent.trim())
//   );

//   const isAllRealme = mobileNames.every(name => name.toLowerCase().includes('realme'));
//   expect(isAllRealme).toBeTruthy();

//   console.log(mobileNames);
//   await page.screenshot({ path: 'screenshot.png' });
//  // await page.pause();
// });

test.only('newTest', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.fill('//*[@id="twotabsearchtextbox"]', 'mobile');
  await page.click('//*[@id="nav-search-submit-button"]');
  await page.waitForLoadState('domcontentloaded');

  await page.click('//*[@id="p_89/realme"]/span/a/span');
  await page.waitForLoadState('domcontentloaded');

  const mobileNames = await page.$$eval('.a-size-medium.a-color-base.a-text-normal', elements =>
    elements.map(element => element.textContent.trim())
  );

  const realmeMobiles = mobileNames.filter(name => name.toLowerCase().includes('realme'));

  for (const mobile of realmeMobiles) {
    console.log(mobile);
  }

  const isAllRealme = realmeMobiles.length === mobileNames.length;
 // expect(isAllRealme).toBeTruthy();
page.pause();
  await page.screenshot({ path: 'screenshot.png' });
});
