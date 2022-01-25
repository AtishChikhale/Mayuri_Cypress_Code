

export class Login {

    NavigateURL() {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    }

    login(userName, PassWord) {
        cy.get('#txtUsername').type(userName)
        cy.get('#txtPassword').type(PassWord)
        cy.get('#btnLogin').click()
    }

    nextpage() {
        cy.get('#menu_dashboard_index').should('be.visible')
    }

    errorMessage(msg) {
        cy.get('#spanMessage').should('have.contain', msg)
    }
}