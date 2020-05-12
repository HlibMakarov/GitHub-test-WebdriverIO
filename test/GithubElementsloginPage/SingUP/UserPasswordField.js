class UserPasswordField {

    get locator() {
        return $('[id="user[password]"]')
    }
    UserPasswordAddValue (value) {
        this.locator.addValue(value);
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'UserPasswordField is not displayed');

    }
}

module.exports = new UserPasswordField()