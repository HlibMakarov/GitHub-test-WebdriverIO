class BackGitHub {

    get locator() {
        return $('//*[text()= "Back to GitHub"]')
    }
   

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED BackGitHub?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE BackGitHub?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled BackGitHub:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'BackGitHub is not displayed');

    }
 
}

module.exports = new BackGitHub()

