class ButtonVersions {

    get buttonVersionsClick() {
        return $('/html/body/div[1]/div/header/div/nav/ul/li[4]/a')
    }
    clickVersions () {
        this.buttonVersionsClick.click();
    }
 
}

module.exports = new ButtonVersions()
