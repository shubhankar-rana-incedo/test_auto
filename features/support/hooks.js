const playwright = require('@playwright/test');
const {POManager} = require('../../pageObjects/POManager');
const {Before, After, BeforeStep, AfterStep,Status} = require('@cucumber/cucumber');

Before(async function() {
    const browser = await playwright.chromium.launch({
        headless: true
    });
    const context = await browser.newContext();
    this.page = await browser.newContext();
    this.page = await context.newPage();
    this.POManager = new POManager(this.page);
});

BeforeStep(async function(){
    await this.page.screenshot({path:'screenshotBefore1.png'});
});

AfterStep(async function(){
    await this.page.screenshot({path:'screenshotAfter1.png'});
});

After(async function(){
    await this.page.pause();
});