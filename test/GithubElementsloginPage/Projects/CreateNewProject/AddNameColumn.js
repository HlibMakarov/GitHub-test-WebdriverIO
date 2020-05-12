class AddNameColumn {

    get locator() {
        return $('#project-column-name-')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED AddNameColumn?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE AddNameColumn?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled AddNameColumn:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'AddNameColumn is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }

    WaitForDisplayed(){
        this.locator.waitForDisplayed({ timeout: 3000 });

    }

    AddValue (value) {
        this.locator.addValue(value);
        
    }
 
}

module.exports = new AddNameColumn()