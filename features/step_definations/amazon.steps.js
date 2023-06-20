const { Given, When, Then } = require('cucumber');
const { test, expect } = require('@playwright/test');
const playwrightConfig = require('../../playwright.config');

const { chromium } = require('playwright');

Given('Visit amazon.in', async function () {
  const browser = await chromium.launch(playwrightConfig);
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.amazon.in/');
});

When('Search for /{string}', async function ({string}) {
  await page.click('//*[@id="twotabsearchtextbox"]');
  await page.fill('//*[@id="twotabsearchtextbox"]', string);
  await page.click('//*[@id="nav-search-submit-button"]');
  await page.waitForLoadState('domcontentloaded');
});

When('Apply realme filter', async function () {
  await page.click('div:nth-child(4) > ul:nth-child(2) > span:nth-child(1) > li:nth-child(1) > span:nth-child(1) > a:nth-child(1) > span:nth-child(2)');
  await page.waitForLoadState('domcontentloaded');
});

Then('Realme mobiles in the search results', async function () {
  const mobileNames = await page.$$eval('.a-size-medium.a-color-base.a-text-normal', elements =>
    elements.map(element => element.textContent.trim())
  );

  const realmeMobiles = mobileNames.filter(name => name.toLowerCase().includes('realme'));

  for (const mobile of realmeMobiles) {
    console.log(mobile);
  }

  const isAllRealme = realmeMobiles.length === mobileNames.length;
  expect(isAllRealme).toBeTruthy();

  await page.screenshot({ path: 'screenshot.png' });
});