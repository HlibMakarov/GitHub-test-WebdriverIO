class VerifYourAccount {

    locator() {
        return $('[class="f4 mb-3"]')
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'VerifYourAccount is not displayed');

    }
 
}

module.exports = new VerifYourAccount()

