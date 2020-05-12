class ButtonRepository {

    get locator() {
        return $('a.pagehead-tabs-item:nth-child(1)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ButtonRepository?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ButtonRepository?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ButtonRepository:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ButtonRepository is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
    AddValue (value) {
        this.locator.addValue(value);
        
    }
 
}

module.exports = new ButtonRepository()