class PresetNameColumn {

    get locator() {
        return $('summary.flex-auto')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED PresetNameColumn?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE PresetNameColumn?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled PresetNameColumn:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'PresetNameColumn is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }

    WaitForDisplayed(){
        this.locator.waitForDisplayed({ timeout: 3000 });

    }
 
}

module.exports = new PresetNameColumn()