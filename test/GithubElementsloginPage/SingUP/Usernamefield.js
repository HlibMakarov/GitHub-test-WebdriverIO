class UserNamefield {

    get locator() {
        return $('[id="user[login]"]')
    }
    UsernameAddValue (value) {
        this.locator.addValue(value);
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'UserNamefield is not displayed');

    }
 
}

module.exports = new UserNamefield()