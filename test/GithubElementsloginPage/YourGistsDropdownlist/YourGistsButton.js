class YourGitHubprofile {

    get locator() {
        return $('//*[text()= "Your GitHub profile"]')
    }
   

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED YourGitHubprofile?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE YourGitHubprofile?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled YourGitHubprofile:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'YourGitHubprofile is not displayed');

    }
 
}

module.exports = new YourGitHubprofile()

