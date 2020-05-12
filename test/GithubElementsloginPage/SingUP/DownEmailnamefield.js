class DownEmailNamefield {

    get locator() {
        return $('[id="user[email]-footer"]')
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
        }, 3000, 'DownEmailNamefield is not displayed');

    }
 
}

module.exports = new DownEmailNamefield()