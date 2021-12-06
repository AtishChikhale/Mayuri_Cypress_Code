describe('Validate simple datepicker', () => {

    beforeEach(() => {
        cy.visit('https://preview.colorlib.com/theme/bootstrap/calendar-11/')
        cy.get('#pick-date').click()
    })

    it('Verify date before 200 days from now', () => {

        //To select date before 200 days
        let date = new Date()
        date.setDate(date.getDate() - 400)
        let Pdate = date.getDate()
        let Pyear = date.getFullYear()
        let Pmonth = date.toLocaleDateString('default', { month: "long" })
        cy.log(Pdate, Pmonth, Pyear) // 23 oct 2020

        function SelectY() {
            cy.get('#pick-date_root').children().find('.picker__header').find('.picker__year').then((el) => {
                cy.log(el)
                if (!el.text().includes(Pyear)) {
                    cy.get('div[class="picker__nav--prev"]').click()
                    SelectY()
                }

            }).then(() => {
                cy.get('#pick-date_root').children().find('.picker__header').find('.picker__month').then((el) => {
                    cy.log(el)
                    if (!el.text().includes(Pmonth)) {
                        cy.get('div[class="picker__nav--prev"]').click()
                        SelectY()
                    }

                }).then(()=>{
                    cy.get('#pick-date_table').children().find('td').contains(Pdate).click({force:true})
                })
            })
        }
        SelectY()

    })

    
})