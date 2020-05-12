class IsDisplayedHelptextBrowseDocs {

    get isDisplayedBrowseDocs() {
        return $('/html/body/div[2]/div/div/div/div/div/div[1]/div/h2/div/span/p')
    }
    isDisplayedBrowseDocs1 () {
        this.isDisplayedBrowseDocs.isDisplayed();
        console.log("IS DISPLAYED?: " + this.isDisplayedBrowseDocs.isDisplayed()) //outputs: true
    }
 
}

module.exports = new IsDisplayedHelptextBrowseDocs()






