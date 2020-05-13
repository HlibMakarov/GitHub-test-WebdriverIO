class TabTopics {

    get locator() {
        return $('[class="js-selected-navigation-item d-inline-block py-2 py-md-3 mr-3 mr-md-4 no-underline subnav-link"][data-hydro-click-hmac="cb649918968c7346d96691251cf264994d069d659f51e0bfe0a7535cab5a9314"]')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED TabTopics?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE TabTopics?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled TabTopics:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'TabTopics is not displayed');

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

module.exports = new TabTopics()