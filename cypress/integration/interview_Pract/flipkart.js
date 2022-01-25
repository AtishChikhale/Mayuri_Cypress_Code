
describe('verify the flipkart', () => {
    it('verify the flipkart', () => {

        let arr = []
        let price = 10000
        cy.visit('https://www.flipkart.com/')
        cy.get('input[class="_3704LK"]').type('Mobile').type('{enter}')
        cy.get('._2YxCDZ').last().select(String(price))
        cy.get('._30jeq3._1_WHN1').each((el) => {
            let prise = el.text()
            arr.push(Number(prise))
            cy.wrap(Number(el.text().replace(/₹|,/gi))).should('be.lte', price)

        })

    })
})