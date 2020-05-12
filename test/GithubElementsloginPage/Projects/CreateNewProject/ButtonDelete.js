class ButtonDelete {

    get locator() {
        return $('.btn-danger')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ButtonDelete?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ButtonDelete?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ButtonDelete:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ButtonDelete is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
    AddValue (value) {
        this.locator.addValue(value);
        
    }
    ScrollIntoView (value) {
        this.locator.scrollIntoView();
        
    }
 
}

module.exports = new ButtonDelete()