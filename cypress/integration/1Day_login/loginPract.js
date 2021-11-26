
//On orangeHRM website

describe('Validate the login functionality', () => {
    it('validate the valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('Admin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    })

    it('validate the invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type('next')
        cy.get('input[id="txtPassword"]').type('admin')
        cy.get('#btnLogin').click()
        cy.get('span[id="spanMessage"]').should('be.visible')
    })

    it('validate only with button', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#btnLogin').click()
        cy.get('span[id="spanMessage"]').should('be.visible')
    })

})