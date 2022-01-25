

describe('verify the radio button',()=>{
    it('verify the readio button',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').first().click().should('be.checked')
        cy.get('input[type="radio"]').eq(2).click().should('be.checked')
        cy.get('input[type="radio"]').first().should('not.be.checked')
    })

    it.only('Verify the radio button with check() method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').first().check('green').should('be.checked').and('have.attr','name','color')
        cy.get('input[type="radio"]').check('yellow').should('be.checked').and('have.attr','name','color')
    })
    
})