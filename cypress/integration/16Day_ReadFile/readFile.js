/// <reference types="cypress" />

describe('Verify the "Read File" and "Write File" in cypress',()=>{
    it('Write File in cypress',()=>{
        cy.writeFile('swap1.json',{firstName:"Mayuri",lastName:"Katwe"})
    })

    it('Validate the content of JSON file using readFile', function () {
        cy.readFile('swap1.json').its('firstName').should('eq', 'Mayuri')
        cy.readFile('swap1.json').its('lastName').should('eq', 'Katwe')
    })
   
})

