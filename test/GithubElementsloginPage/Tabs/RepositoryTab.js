class RepositoryTab {

    get locator() {
        return $('a.UnderlineNav-item:nth-child(2)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED RepositoryTab?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE RepositoryTab?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled RepositoryTab:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'RepositoryTab is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
    AddValue (value) {
        this.locator.addValue(value);
        
    }
    GetText () {
        this.locator.getText();
        
    }
    AssertText () {
        
        assert.strictEqual(GetText,'New')
        
    }

    
 
}

module.exports = new RepositoryTab()