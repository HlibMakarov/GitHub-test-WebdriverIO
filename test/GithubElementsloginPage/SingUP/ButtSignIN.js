class ButtonSignIn {

    get locator() {
        return $('[class="HeaderMenu-link no-underline mr-3"]')
    }
    SinginClick () {
        this.locator.click();
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ButtonSignIn is not displayed');

    }
 
}

module.exports = new ButtonSignIn()