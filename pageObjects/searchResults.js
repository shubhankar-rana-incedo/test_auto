class searchResults {
    constructor(page) {
        this.page = page;
        this.relameFilter = page.locator("//span[@class='a-size-base a-color-base'][normalize-space()='realme']");
    }

    async applyFilter() {
        await this.relameFilter.click();
        await this.waitForLoadState('domcontentloaded');
    }

    async realmeMobiles() {
        const mobileNames = await page.$$eval('.a-size-medium.a-color-base.a-text-normal', elements =>
            elements.map(element => element.textContent.trim())
        );

        const realmeMobiles = mobileNames.filter(name => name.toLowerCase().includes('realme'));

        for (const mobile of realmeMobiles) {
            console.log(mobile);
        }

        const isAllRealme = realmeMobiles.length === mobileNames.length;
        expect(isAllRealme).toBeTruthy();
    }

    async outputScreenshot() {
        await this.screenshot({ path: 'screenshot.png' });
    }
}

module.exports = { searchResults };
