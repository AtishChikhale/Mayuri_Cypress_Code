

export class OrangeHRM {

    Url() {
        cy.visit('https://www.orangehrm.com/')
    }

    emailID(email) {
        cy.get('#myText',{timeout:4000}).type(email).type('{enter}')
        cy.url().should('includes', '-30-day-trial/?')
        cy.get('#Form_submitForm_Email').should('have.value',email)
        
    }
}