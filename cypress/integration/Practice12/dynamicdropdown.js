
// describe('Verify the dynamic dropdown', () => {
//     it('verify the dynamic dropdown', () => {
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#autocomplete').type('ind')
//         cy.get('.ui-menu-item').each((el) => {
//             let text = el.text()
//             if (text == "India") {
//                 cy.wrap(el).click()
//             }
//         })
//         cy.get('#autocomplete').should('have.value','India')
//     })
// })



describe('verify the dynamic drpdown',()=>{
    it('verify the dynamic dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ba')
        cy.get('.ui-menu-item').each((el)=>{
            let text=el.text()
            if(text=="Bangladesh"){
                cy.wrap(el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','Bangladesh')
    })
})