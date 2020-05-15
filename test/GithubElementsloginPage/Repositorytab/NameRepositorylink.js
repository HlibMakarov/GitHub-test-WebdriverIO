class NameRepositorylink {

    get locator() {
        return $('.wb-break-all > a:nth-child(1)')
    }             
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED NameRepositorylink?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE NameRepositorylink?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled NameRepositorylink:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'NameRepositorylink is not displayed');

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

module.exports = new NameRepositorylink()