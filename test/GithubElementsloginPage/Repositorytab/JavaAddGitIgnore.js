class JavaAddGitIgnore {

    get locator() {
        return $('label.select-menu-item:nth-child(52) > span')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED JavaAddGitIgnore?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE JavaAddGitIgnore?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled JavaAddGitIgnore:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'JavaAddGitIgnore is not displayed');

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

module.exports = new JavaAddGitIgnore()