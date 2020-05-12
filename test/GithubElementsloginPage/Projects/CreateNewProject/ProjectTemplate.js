class ProjectTemplate {

    get locator() {
        return $('summary.btn')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ProjectTemplate?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ProjectTemplate?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ProjectTemplate:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ProjectTemplate is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
 
}

module.exports = new ProjectTemplate()