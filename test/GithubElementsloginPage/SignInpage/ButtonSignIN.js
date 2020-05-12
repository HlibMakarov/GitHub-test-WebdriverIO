class ButtonSignIn2 {

    get locator() {
        return $('[class="btn btn-primary btn-block"]')
    }
    ClickSingin () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ButtonSignIn2 is not displayed');

    }

}

module.exports = new ButtonSignIn2()