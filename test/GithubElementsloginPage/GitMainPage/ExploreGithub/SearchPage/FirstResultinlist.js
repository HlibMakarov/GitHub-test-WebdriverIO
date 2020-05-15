class FirstResultinlist {

    get locator() {
        return $('li.repo-list-item:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1)')
    }             
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED FirstResultinlist?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE FirstResultinlist?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled FirstResultinlist:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'FirstResultinlist is not displayed');

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
        this.locator.ScrollIntoView()
    }

    
 
}

module.exports = new FirstResultinlist()