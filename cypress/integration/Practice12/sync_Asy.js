

//Cypress commad are are Asunchronous in nature
//Cypress execution is synch in nature
//js is sunch
//ajax code in js it become asynchronous in nature


describe('Verify the login finctionality',()=>{
    it('verify the login functionality',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.contains('Dashboard').should('be.visible')
        cy.url().should('includes','dashboard').then(()=>{
            console.log("hello")
        })
        
    })
})

