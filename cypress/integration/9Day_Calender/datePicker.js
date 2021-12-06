describe('Verify datePicket functionality', () => {

    it('Verify datePicker on webdriver website', () => {

        //==========================================================================
        //****************JUST FOR UNDESTANDING ********/
        // let date = new Date()
        // //Inorder to find current day,current month,current year we have method like below
        // //for example this is date=> 11/26/2021
        // let currentDate = date.getDate()
        // cy.log(currentDate) //26

        // let currentMonth = date.getMonth()
        // cy.log(currentMonth) //10 =>month is count from 0 so at 0=>jan & 11=>dec

        // let currentYear = date.getFullYear()
        // cy.log(currentYear) //2021

        // // //as above We get month in number i.e. 10 but in some application month is in word , so there is one method to get it in string
        // // //currentMonth = date.toLocaleDateString('default', { month: 'long' })
        // currentMonth = date.toLocaleDateString('default', { month: 'short' })
        // cy.log(currentMonth)

        //******************************************************************************* */


        let date = new Date()
        date.setDate(date.getDate() + 500)//Here I have set the date after 500 days from now
        let year = date.getFullYear()
        let month = date.getMonth()
        month = date.toLocaleDateString('default', { month: "long" })
        let dateN = date.getDate()
        cy.log(dateN) //10
        cy.log(year) //2023
        cy.log(month) //APRIL

        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.form-control').click()

        function SelectDateAndYear() {
            cy.get('.datepicker-switch').eq(0).then((ele) => {
                if (!ele.text().includes(year)) {
                    cy.get('.next').first().click()
                    SelectDateAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-switch').eq(0).then((ele) => {
                    if (!ele.text().includes(month)) {
                        cy.get('.next').first().click()
                        SelectDateAndYear()
                    }
                }).then(()=>{
                    cy.get('.table-condensed').eq(0).children().find('.day').contains(dateN).click()
                })
            })
        }
        SelectDateAndYear()

        // function SelectDate() {
        //     cy.get('.table-condensed').eq(0).children().find('.day').contains(dateN).click()
        // }
        // SelectDate()

    })
})