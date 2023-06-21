class homePage{
    construstor(page)
    {
        this.page=page;
        this.searchBar=page.locator('//*[@id="twotabsearchtextbox"]')
        this.searchButton=page.locator('//*[@id="nav-search-submit-button"]')
    }

    async goTo()
    {
        await this.page.goto('https://www.amazon.in/')
    }

    async searchProduct(string)
    {
        await this.searchBar.click();
        await this.searchBar.type(string);
        await this.searchButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}

module.exports = {homePage};
