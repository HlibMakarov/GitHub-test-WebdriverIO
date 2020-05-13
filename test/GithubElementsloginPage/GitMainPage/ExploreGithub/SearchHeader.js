class SearchHeader {

    get locator() {
        return $('[class="form-control input-sm header-search-input jump-to-field js-jump-to-field js-site-search-focus "]')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED SearchHeader?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE SearchHeader?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled SearchHeader:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'SearchHeader is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
    AddValue (value) {
        this.locator.addValue(value);
        
    }
    GetText () {
        return this.locator.getText()
        
    }

    MoveTo () {
        this.locator.moveTo()
        
    }
  

    
 
}

module.exports = new SearchHeader()