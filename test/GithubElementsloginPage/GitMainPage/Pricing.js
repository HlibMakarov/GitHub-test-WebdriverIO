class Pricing {

    get locator() {
        return $('//summary[contains(text(),"Pricing")]')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED Pricing?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE Pricing?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled Pricing:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'Pricing is not displayed');

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
  

    
 
}

module.exports = new Pricing()