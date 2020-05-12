class ToDoRaidoBut {

    get locator() {
        return $('label.select-menu-item:nth-child(2)')
    }
    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED ToDoRaidoBut?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE ToDoRaidoBut?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled ToDoRaidoBut:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ToDoRaidoBut is not displayed');

    }

    WaitForClickable(){
        this.locator.waitForClickable({ timeout: 3000 });

    }

    WaitForDisplayed(){
        this.locator.waitForDisplayed({ timeout: 3000 });

    }
 
}

module.exports = new ToDoRaidoBut()