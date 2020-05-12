class OverviewTab {

    get locator() {
        return $('a.UnderlineNav-item:nth-child(1)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED OverviewTab?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE OverviewTab?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled OverviewTab:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'OverviewTab is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
 
}

module.exports = new OverviewTab()