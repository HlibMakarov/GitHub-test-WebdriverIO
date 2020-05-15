class GetTextNameDelRepo {

    get locator() {
        return $('div.Box:nth-child(15) > ul:nth-child(1) > li:nth-child(4) > details:nth-child(1) > details-dialog:nth-child(2) > div:nth-child(3) > p:nth-child(2) > strong:nth-child(1)')
    }             
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED GetTextNameDelRepo?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE GetTextNameDelRepo?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled GetTextNameDelRepo:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'GetTextNameDelRepo is not displayed');

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

module.exports = new GetTextNameDelRepo()