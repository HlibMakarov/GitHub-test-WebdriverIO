class NewlyAddedCheck {

    get locator() {
        return $('div.form-checkbox:nth-child(2) > label:nth-child(1) > input')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED NewlyAddedCheck?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE NewlyAddedCheck?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled NewlyAddedCheck:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }
    ScrollIntoView () {
        this.locator.scrollIntoView();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'NewlyAddedCheck is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }

    WaitForDisplayed(){
        this.locator.waitForDisplayed({ timeout: 3000 });

    }
 
}

module.exports = new NewlyAddedCheck()