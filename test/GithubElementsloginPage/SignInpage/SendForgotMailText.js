class SendForgotMailText {

    get locator() {
        return $('.mt-0')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED SendForgotMailText?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE SendForgotMailText?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled SendForgotMailText:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'SendForgotMailText is not displayed');

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

module.exports = new SendForgotMailText()