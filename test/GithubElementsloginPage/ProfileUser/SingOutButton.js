class SingOutButton {

    get locator() {
        return $('[class="dropdown-item dropdown-signout"]')
    }
   

    isDisplayed () {
        this.locator.isDisplayed();
        console.log("IS DISPLAYED SingOutButton?: " + this.locator.isDisplayed()) //outputs: true
    }
    Clickable() {
        this.locator.isClickable();
        console.log("IS CLICKABLE SingOutButton?: "+ this.locator.isClickable())  //outputs: true!
    }
    Enable (){
        this.locator.isEnabled();
        console.log("isEnabled SingOutButton:" + this.locator.isEnabled()); // output: true
    }
    Click () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'SingOutButton is not displayed');

    }
 
}

module.exports = new SingOutButton()

