class PrivatRadioBut {

    get locator() {
        return $('#project_public_false')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED PrivatRadioBut?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE PrivatRadioBut?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled PrivatRadioBut:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'PrivatRadioBut is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
 
}

module.exports = new PrivatRadioBut()