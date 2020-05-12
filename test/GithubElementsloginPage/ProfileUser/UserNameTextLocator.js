class UserNameText {

    get locator () {
        return $('[class="css-truncate-target"]')
    }

    GetUserNameTextinProf () {
        return this.locator.getText();
    }
    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 3000, 'UserNameText is not displayed');

    }


 
}

module.exports = new UserNameText()