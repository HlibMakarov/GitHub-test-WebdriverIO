class HelpButton {

    get locator() {
        return $('[data-ga-click="Header, go to help, text:help"]')
    }
   

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED HelpButton?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE HelpButton?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled HelpButton:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'HelpButton is not displayed');

    }
 
}

module.exports = new HelpButton()

