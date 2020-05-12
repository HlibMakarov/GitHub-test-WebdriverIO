class UserEmailField {

    get locator() {
        return $('[id="user[email]"]')
    }
    UserEmailAddValue (value) {
        this.locator.addValue(value);
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'UserEmailField is not displayed');

    }
 
}

module.exports = new UserEmailField()