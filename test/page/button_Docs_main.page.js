class ButtonDocs {

    get buttonDocsClick() {
        return $('/html/body/div[1]/div/header/div/nav/ul/li[1]/a')
    }
    clickButtonDocs () {
        this.buttonDocsClick.click();
    }
 
}

module.exports = new ButtonDocs()