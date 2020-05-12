class TemplateBasicKanban {

    get locator() {
        return $('label.select-menu-item:nth-child(2)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED TemplateBasicKanban?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE TemplateBasicKanban?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled TemplateBasicKanban:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'TemplateBasicKanban is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }
 
}

module.exports = new TemplateBasicKanban()