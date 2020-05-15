class ButtDeletRepo {

    get locator() {
        return $('div.Box:nth-child(15) > ul:nth-child(1) > li:nth-child(4) > details:nth-child(1) > summary')
    }             
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ButtDeletRepo?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ButtDeletRepo?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ButtDeletRepo:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'ButtDeletRepo is not displayed');

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

module.exports = new ButtDeletRepo()