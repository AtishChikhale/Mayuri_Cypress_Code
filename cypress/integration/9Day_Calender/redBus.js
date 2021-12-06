//RED BUS 

describe('Validate date of redbus website', () => {
    it('validate the date', () => {
        let date = new Date()
        date.setDate(date.getDate() + 365)
        let date1 = date.getDate()
        let year = date.getFullYear()
        let month = date.toLocaleDateString('default', { month: "short" })
        cy.log(date1, year, month)  // 27, 2022, Nov


        cy.visit('https://www.redbus.com/')
        cy.get('input[id="onward_cal"]').click({ force: true })

        function SelectYM() {
            cy.get('.monthTitle').last().then((el) => {
                if (!el.text().includes(year)) {

                    cy.get('.next').last().click()
                    SelectYM()

                }
            }).then(() => {
                cy.get('.monthTitle').last().then((el) => {
                    if (!el.text().includes(month)) {

                        cy.get('.next').last().click()
                        SelectYM()
                    }
                })
            })
        }

        SelectYM()

        function SelectD() {
            cy.get('#rb-calendar_onward_cal').children().find('tr').contains(date1).click()
        }
        SelectD()

    })
})