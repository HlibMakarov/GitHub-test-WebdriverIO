class NoneAddGitIgnore {

    get locator() {
        return $('div.select-menu-list:nth-child(3) > div:nth-child(1) > label:nth-child(1) > span')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED NoneAddGitIgnore?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE NoneAddGitIgnore?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled NoneAddGitIgnore:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'NoneAddGitIgnore is not displayed');

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

module.exports = new NoneAddGitIgnore()