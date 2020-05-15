class StartEnterprise {

    get locator() {
        return $('[class="btn-mktg mb-1 d-block d-md-inline-block text-center mt-2"]')
    }             
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED StartEnterprise?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE StartEnterprise?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled StartEnterprise:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'StartEnterprise is not displayed');

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
    Scroll() {
        this.locator.scrollIntoView();
    }

    
 
}

module.exports = new StartEnterprise()