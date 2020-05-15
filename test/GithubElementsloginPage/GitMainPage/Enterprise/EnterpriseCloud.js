class EnterpriseCloud {

    get locator() {
        return $('//div[contains(text(),"Enterprise Cloud") and @class="h1 "]')
    }             
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED EnterpriseCloud?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE EnterpriseCloud?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled EnterpriseCloud:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'EnterpriseCloud is not displayed');

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

module.exports = new EnterpriseCloud()