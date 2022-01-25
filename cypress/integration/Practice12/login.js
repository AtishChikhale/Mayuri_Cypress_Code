describe('Verify the login functionality',()=>{
    it('Varify the login functionality with valid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#menu_dashboard_index').should('be.visible')
    })

    it('Verify the login functionality with invalid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('mayuri')
        cy.get('#txtPassword').type('mayuri123')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('have.contain','Invalid credentials')
    })
})