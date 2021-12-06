
//in this in order to know cypress we are find eleemnt which present in frame we used pluging which is 2 nd approch 1 st approch is find element bu using jqery and js methods

//REQUIREMENET OF PLUGING
//1. need to run command => npm install -D cypress-iframe =>which invoke all the ifreame command and cypress get knowlwdge about iframe

import 'cypress-iframe' //most imp step if not write gies the error

describe('handling frame by using pluging', () => {
    it('handling freame by using pluging', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="#/mentorship"]').first().click()
        cy.iframe().find('h1[class="pricing-title text-white ls-1"]').should('have.length', 2)

    })
})