class ApiContributelink {

    get ContributeLocator() {
        return $('li a[href="#contribute"]')
    }
    ContributeclickLink () {
        this.ContributeLocator.click();
    }
 
}

module.exports = new ApiContributelink()

