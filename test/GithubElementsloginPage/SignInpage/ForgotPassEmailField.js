class ForgPasEmail {

    get locator() {
        return $('//*[@id="email_field"]')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ForgPasEmail?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ForgPasEmail?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ForgPasEmail:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ForgPasEmail is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
    AddValue (value) {
        $('//*[@id="email_field"]').addValue(value);
    }

    GetText () {
        return this.locator.getText()
        
    }
  

    
 
}

module.exports = new ForgPasEmail()