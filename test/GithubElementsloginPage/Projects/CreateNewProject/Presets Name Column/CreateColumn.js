class CreateColumn {

    get locator() {
        return $('button.flex-auto')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED CreateColumn?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE CreateColumn?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled CreateColumn:" + this.locator.isEnabled()); // output: true
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
        }, 3000, 'CreateColumn is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }

    WaitForDisplayed(){
        this.locator.waitForDisplayed({ timeout: 3000 });

    }
 
}

module.exports = new CreateColumn()