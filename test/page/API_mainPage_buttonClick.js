class ButtonAPI {

    get buttonAPIClick() {
        return $('/html/body/div[1]/div/header/div/nav/ul/li[2]/a')
    }
    clickButtonApi () {
        this.buttonAPIClick.click();
    }
 
}

module.exports = new ButtonAPI()