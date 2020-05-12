class FollowingTab {

    get locator() {
        return $('a.UnderlineNav-item:nth-child(7)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED FollowingTab?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE FollowingTab?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled FollowingTab:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'FollowingTab is not displayed');

    }
 
}

module.exports = new FollowingTab()