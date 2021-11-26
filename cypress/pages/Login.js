export class loginOrangeHRM {
    navigation() {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')

    }

    loginCredential(userName, passWord) {
        cy.get('#txtUsername').type(userName)
        cy.get('#txtPassword').type(passWord)
        cy.get('#btnLogin').click()
    }

    validateLogo() {
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    }

    validaterrorMsg(){
        cy.contains('Invalid').should('be.visible')
    }
}