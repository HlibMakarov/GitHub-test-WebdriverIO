class GetPositionsText {

    GetTextConsole() {
        const locator1 = $('div.Details:nth-child(1) > div:nth-child(1) > button:nth-child(1) > h3')
        const locator2 = $('div.Details:nth-child(2) > div:nth-child(1) > button:nth-child(1) > h3')
        const locator3 = $('div.Details:nth-child(3) > div:nth-child(1) > button:nth-child(1) > h3')
        const locator4 = $('div.Details:nth-child(4) > div:nth-child(1) > button:nth-child(1) > h3')
        const locator5 = $('div.Details:nth-child(5) > div:nth-child(1) > button:nth-child(1) > h3')
        const locator6 = $('div.Details:nth-child(6) > div:nth-child(1) > button:nth-child(1) > h3')

        let getText1 = locator1.getText()
        let getText2 = locator2.getText()
        let getText3 = locator3.getText()
        let getText4 = locator4.getText()
        let getText5 = locator5.getText()
        let getText6 = locator6.getText()

        return console.log(
            "Result GetText:\n"+ 
            getText1 + "\n" +
            getText2 + "\n" +
            getText3 + "\n" +
            getText4 + "\n" +
            getText5 + "\n" +
            getText6
            )
        }


}

module.exports = new GetPositionsText()