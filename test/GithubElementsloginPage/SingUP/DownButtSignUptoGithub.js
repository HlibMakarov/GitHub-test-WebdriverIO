class DownButtonSignUp {

    get locator() {
        return $('[class="btn-mktg btn-primary-mktg btn-block mt-n1"]')
    }

    ClickButton () {
        this.locator.click();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'DownButtonSignUp is not displayed');

    }
 
}

module.exports = new DownButtonSignUp()