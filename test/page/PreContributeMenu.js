class ApiPreMenuContributelink {
    get ContributeLocatorMenu() {
        return $('[id="tocToggler"]')
    }
    
    PreMenuContribute () {
        this.ContributeLocatorMenu.click();
    }
 
}

module.exports = new ApiPreMenuContributelink()