class StarsTab {

    get locator() {
        return $('a.UnderlineNav-item:nth-child(5)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED Stars?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE Stars?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled Stars:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'Stars is not displayed');

    }
 
}

module.exports = new StarsTab()