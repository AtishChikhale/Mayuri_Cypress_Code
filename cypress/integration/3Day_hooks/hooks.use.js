// //On Insta
// beforeEach(()=>{
//     cy.visit('https://www.instagram.com/accounts/login/')
// })

// describe('login instgram',()=>{
//     it('Valid Credential',()=>{
//          cy.get('input[name="username"]').type('mayurimkatwe')
//          cy.get('input[name="password"]').type('mjmv@5298')
//          cy.get('.sqdOP.L3NKy.y3zKF').click()
//          cy.get('.eyXLr').should('be.visible')
//     })
// })

// afterEach(()=>{
//     cy.get('img[data-testid="user-avatar"]').click()
//     cy.contains('Log Out').click()

// })

//========================================2 code=============================================

//on OrangeHRM

describe('Validate Heading page',()=>{

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
    })

    it('Verify 11 section should be present on top',()=>{
        cy.get('#mainMenuFirstLevelUnorderedList').children().should('have.length',11)
    })

    afterEach(()=>{
        cy.get('.panelTrigger').click()
        cy.get('a[href="/index.php/auth/logout"]').click()
        cy.get('#logInPanelHeading').should('be.visible')
    })
    
})







