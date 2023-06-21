const {homePage} = require ('../pageObjects/homePage');
const {searchResults} = require ('../pageObjects/searchResults');   
 
class POManager
{
    constructor(page)
    {
        this.page=page;
        this.homePage=new homePage(this.page);
        this.searchResults=new searchResults(this.page);
    }

    getHomePage()
    {
        return this.homePage;
    }

    getSearchPage()
    {
        return this.searchResults;
    }
}

module.exports = {POManager};