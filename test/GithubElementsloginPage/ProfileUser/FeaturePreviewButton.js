class FeaturePreButtonPreButton {

    get locator() {
        return $('div button[class="dropdown-item btn-link"]')
    }
   

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED FeaturePreButton?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE FeaturePreButton?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled FeaturePreButton:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }
 
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'FeaturePreButton is not displayed');

    }
}

module.exports = new FeaturePreButtonPreButton()

