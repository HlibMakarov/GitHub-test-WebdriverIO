class ButtonProfileDropList {

    get locator() {
        return $('[class="avatar avatar-user "]')
    }
    ClickButton () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isExisting();
        }, 3000, 'ButtonProfileDropList is not displayed');

    }
 
}

module.exports = new ButtonProfileDropList()