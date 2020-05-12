class AddLicense {

    get locator() {
        return $('/html/body/div[4]/main/div/form/div[3]/div[4]/div[2]/div/details/summary')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED AddLicense?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE AddLicense?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled AddLicense:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'AddLicense is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
    AddValue (value) {
        this.locator.addValue(value);
        
    }
    GetText () {
        return this.locator.getText()
        
    }
  

    
 
}

module.exports = new AddLicense()