describe('ChildTab handling in cypress', () => {
    it('ChildTab handling', () => {
        //when we tap on any eleemnt it navigate to another link only when there is one attribute called target and its value is blank
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include','index')


        //to navigate back to orginal page
        cy.go('back')
        cy.url().should('include','/AutomationPractice/')
    })
})