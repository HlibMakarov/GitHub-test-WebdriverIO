class DownUserNamefield {

    get locator() {
        return $('[id="user[login]-footer"]')
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
        }, 3000, 'DownUserNamefield is not displayed');

    }
 
}

module.exports = new DownUserNamefield()