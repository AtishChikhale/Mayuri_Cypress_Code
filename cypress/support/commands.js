// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//===================================================================================
//Find the sum age in table 
Cypress.Commands.add('AgeCalculate', (id, expectValue) => {
    let sum = 0
    cy.get(`#${id}`).find('tr').each((el, index, list) => {
        let age1 = el.children('td').last().text()
        //cy.log(age1)
        sum = sum + Number(age1)
        //cy.log(sum)
    }).then(() => {
        expect(sum).to.eql(expectValue)
    })
})


//=======================================================================================

//Custom commad for the confirm popup)
Cypress.Commands.add('confirmPopup', (locator, Nstr, flag, footer) => {
    cy.get(locator).click()
    cy.on('window:confirm', function (str) {
        expect(str).to.eql(Nstr)
        return flag
    })
    cy.get('#confirm-alert-text').should('have.text', footer)
})
//=========================================================================================

// Cypress.Commands.add('confirmPopup', (locator, Nstr, footer) => {
//     cy.get(locator).click()
//     cy.on('window:alert', function (str) {
//         expect(str).to.eql(Nstr)
//         return true
//     })
//     cy.get('#confirm-alert-text').should('have.text', footer)
// })

import 'cypress-file-upload';

Cypress.Commands.add('GetAPIData', (method, url) => {
    cy.request({
        method: method,
        url: url,
        headers: {
            Authorization: 'Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50'
        }
    })
})

//=================================================================================================

//GorestApi-new_23_utility

Cypress.Commands.add('apiRequest', (method, url, body) => {
    if (body) {
        cy.request({
            method: method,
            url: url,
            headers: {
                Authorization: "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
            },
            body: body
        })
    } else {
        cy.request({
            method: method,
            url: url,
            headers: {
                Authorization: "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
            }
        })
    }

})
