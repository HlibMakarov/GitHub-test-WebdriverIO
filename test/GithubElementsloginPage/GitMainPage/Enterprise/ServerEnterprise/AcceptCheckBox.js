class AcceptCheckBox {

    get locator() {
        return $('[id="contact_request_agreed_to_terms"]')
    }             
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED AcceptCheckBox?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE AcceptCheckBox?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled AcceptCheckBox:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'AcceptCheckBox is not displayed');

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

    MoveTo () {
        this.locator.moveTo()
        
    }
    Scroll() {
        this.locator.scrollIntoView();
    }

    
 
}

module.exports = new AcceptCheckBox()