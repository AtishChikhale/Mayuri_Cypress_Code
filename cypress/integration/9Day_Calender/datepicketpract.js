describe('datapicker', () => {

    it('datapicker', () => {

        let kk = new Date()
        kk.setDate(kk.getDate() - 500)
        let day = kk.getDate()
        let fullyear = kk.getFullYear()
        let month = kk.toLocaleDateString('default', { month: "long" })
        cy.log(day)
        cy.log(month)
        cy.log(fullyear)

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').last().click()


        function callfn() {
            cy.get('.datepicker-switch').first().then((el) => {
                if (!el.text().includes(fullyear)) {
                    cy.get('.prev').eq(0).click()
                    callfn()
                }
            }).then(() => {

                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(month)) {
                        cy.get('.prev').eq(0).click()
                        callfn()
                    }
                })


            })

        }
        callfn()

        function calldate() {
            cy.get('.day').contains(day).click()
        }
        calldate()

    })
})