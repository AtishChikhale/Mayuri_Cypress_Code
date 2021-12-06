describe('Child window handling', () => {
    it('Verify child window', () => {

        //1 st way by removing target attribute
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'index')
        cy.go('back')

        //2 nd way=>if there is href attribute we find its value and passed it in url
        cy.get('#opentab').then((el) => {
            let url = el.prop('href')
            cy.visit(url)
            cy.url().should('include', 'index')
        })

    })
})
