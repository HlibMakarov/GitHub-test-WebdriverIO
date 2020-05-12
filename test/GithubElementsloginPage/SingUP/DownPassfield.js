class DownPassfield {

    get locator() {
        return $('[id="user[password]-footer"]')
    }
    ScrolltoLocator () {
        this.locator.scrollIntoView();
    }
    AddValue (value) {
        this.locator.addValue(value);
     }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'DownPassfield is not displayed');

    }
 
}

module.exports = new DownPassfield()