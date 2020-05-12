class PasswordField {

    get locator() {
        return $('form div input[id="password"]')
    }
    clearValue (){
        this.locator.clearValue()
    }

    AddValue (value) {
        this.locator.addValue(value);
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'PasswordField is not displayed');

    }
 
}

module.exports = new PasswordField()