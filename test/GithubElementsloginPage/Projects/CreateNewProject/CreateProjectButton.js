class CreateProjectButton {

    get locator() {
        return $('button.flex-auto')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED CreateProjectButton?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE CreateProjectButton?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled CreateProjectButton:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'CreateProjectButton is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
 
}

module.exports = new CreateProjectButton()