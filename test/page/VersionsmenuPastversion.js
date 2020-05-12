class PastVersions {
    get PastVersionsLocator() {
        return $('/html/body/div[2]/div/div/div/div[1]/article/div/span/h2[2]')
    }
    
    PastVersionsClick () {
        this.PastVersionsLocator.click();
    }
 
}

module.exports = new PastVersions()