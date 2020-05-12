class ButtonSignUp {

    get locator() {
        return $('[class="btn-mktg btn-primary-mktg btn-large-mktg f4 btn-block my-3"]')
    }
    SingUpClick () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'ButtonSignUp is not displayed');

    }
 
}

module.exports = new ButtonSignUp()