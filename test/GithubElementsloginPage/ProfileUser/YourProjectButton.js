class YourProjectButton {

    get locator() {
        return $('[data-ga-click="Header, go to projects, text:your projects"]')
    }

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED Project?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE Project?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled Project:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'Project is not displayed');

    }
 
}

module.exports = new YourProjectButton()

