class PackagesTab {

    get locator() {
        return $('a.UnderlineNav-item:nth-child(4)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ProjectTab?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ProjectTab?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ProjectTab:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'PackagesTab is not displayed');

    }
 
}

module.exports = new PackagesTab()