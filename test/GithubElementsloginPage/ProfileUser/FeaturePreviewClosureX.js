class FeatureClosureX {

    get locator() {
        return $('button.Box-btn-octicon:nth-child(2)')
    }
   

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED FeaturePreviewClosureX?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE FeaturePreviewClosureX?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled FeaturePreviewClosureX:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 7000, 'FeaturePreviewClosureX is not displayed');

    }
    WaitForClickable(){
        browser.waitUntil(() => {
        return this.locator.waitForClickable({ timeout: 3000 });
        }, 7000, 'FeaturePreviewClosureX is not displayed');

    }
 
}

module.exports = new FeatureClosureX()

