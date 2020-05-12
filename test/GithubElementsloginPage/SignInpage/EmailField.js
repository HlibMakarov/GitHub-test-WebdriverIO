class EmailField {

    get locator() {
        return $('form div input[id="login_field"]')
    }
    clearValue (){
        this.locator.clearValue()
    }
    getValue (){
        this.locator.getValue()
    }
    
    AddValue (value) {
        this.locator.addValue(value);
        
    }

    Wait(){
        browser.waitUntil(() => {
        return this.locator.isDisplayed();
        }, 5000, 'EmailField is not displayed');

    }
}

module.exports = new EmailField()