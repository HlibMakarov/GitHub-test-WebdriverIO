class ButtonTypescript {

    get locator() {
        return $('.filter-list > li:nth-child(10) > a:nth-child(2)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ButtonTypescript?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ButtonTypescript?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ButtonTypescript:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'ButtonTypescript is not displayed');

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

module.exports = new ButtonTypescript()