class ButtonHelp {

    get buttonHelpClick() {
        return $('/html/body/div[1]/div/header/div/nav/ul/li[3]/a')
    }
    clickButtonHelp () {
        this.buttonHelpClick.click();
    }
 
}

module.exports = new ButtonHelp()






