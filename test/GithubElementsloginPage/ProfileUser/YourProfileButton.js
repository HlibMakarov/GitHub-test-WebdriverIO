class YourProfileButton {

    get locator() {
        return $('[data-ga-click="Header, go to profile, text:your profile"]')
    }
    ClickYourProfileButton () {
        this.locator.click();
    }

    isDisplayedYourProfile () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED YourProfile?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE YourProfile?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled YourProfile:" + this.locator.isEnabled()); // output: true
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'YourProfile is not displayed');

    }
 
}

module.exports = new YourProfileButton()

