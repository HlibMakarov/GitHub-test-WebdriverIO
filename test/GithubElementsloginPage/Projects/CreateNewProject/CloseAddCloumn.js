class CloseAddCloumn {

    get locator() {
        return $('div.project-pane:nth-child(5) > div:nth-child(1) > button:nth-child(1) > svg:nth-child(1)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED CloseAddCloumn?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE CloseAddCloumn?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled CloseAddCloumn:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'CloseAddCloumn is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
    AddValue (value) {
        this.locator.addValue(value);
        
    }
 
}

module.exports = new CloseAddCloumn()