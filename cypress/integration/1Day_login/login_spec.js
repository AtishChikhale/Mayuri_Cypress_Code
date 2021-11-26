//Test Scenario => what to test
//Test Case => How to test

describe('Validate the login functionality', () => {
    it('Validate with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type("Admin")
        cy.get('input[id="txtPassword"]').type("admin123")
        cy.get('input[id="btnLogin"]').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    })

    it('Validate with invalid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type("new")
        cy.get('input[id="txtPassword"]').type("new123")
        cy.get('input[id="btnLogin"]').click()
        cy.get('span[id="spanMessage"]').should('be.visible')

    })
})