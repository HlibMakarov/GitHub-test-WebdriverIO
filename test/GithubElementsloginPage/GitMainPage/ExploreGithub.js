class ExploreGithub {
    get locator() {
        return $('[class="py-2 lh-condensed-ultra d-block link-gray-dark no-underline h5 Bump-link--hover"][href="/explore"]')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ExploreGithub?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ExploreGithub?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ExploreGithub:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ExploreGithub is not displayed');

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

module.exports = new ExploreGithub()