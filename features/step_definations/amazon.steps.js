const { Given, When, Then } = require('@cucumber/cucumber');
const { POManager } = require('../../pageObjects/POManager');
const { expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('Visit amazon.in', async function () {
  const homePage = this.POManager.getHomePage();
  await homePage.goTo();
});

When('Search for {string}', async function ({string}) {
  const homePage = this.POManager.getHomePage();
  await homePage.searchProduct(mobile);
});

When('Apply realme filter', async function () {
  const searchPage = this.POManager.getSearchPage();
  await searchPage.applyFilter();
});

Then('Realme mobiles in the search results', async function () {
  const searchPage = this.POManager.getSearchPage();
  searchPage.realmeMobiles();
  searchPage.outputScreenshot();
});