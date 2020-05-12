class YourRepositoryButton {

    get locator() {
        return $('[data-ga-click="Header, go to repositories, text:your repositories"]')
    }
   

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED Repository?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE Repository? : "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled Repository:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'Repository is not displayed');

    }
 
}

module.exports = new YourRepositoryButton()

