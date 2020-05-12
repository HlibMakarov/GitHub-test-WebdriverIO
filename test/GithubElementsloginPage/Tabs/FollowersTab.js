class FollowersTab {

    get locator() {
        return $('a.UnderlineNav-item:nth-child(6)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED FollowersTab?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE FollowersTab?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled FollowersTab:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'FollowersTab is not displayed');

    }
 
}

module.exports = new FollowersTab()