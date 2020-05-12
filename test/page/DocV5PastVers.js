class DocV5PastVer {

    get DocV5locatorlink() {
        return $('[href="https://v5.webdriver.io/"]')
    }

    DocV5Click () {
        this.DocV5locatorlink.click()
    }
}

module.exports = new DocV5PastVer()








