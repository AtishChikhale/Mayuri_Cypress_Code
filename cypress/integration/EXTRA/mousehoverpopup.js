describe('mouse hover popup',()=>{
    it('mouse hoover popup',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('.mouse-hover-content').invoke('show')
        // cy.contains('Top').click()
        // cy.url().should('include','top')


        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})