//RadioButton
//1. By using click() method
//2. By using check() method
//3. By using check by passing value in argument as like =>check('value') method

//Note: In radio button there is no uncheck method as we select another radio button first selected radio button automatically get deselected

describe('Verify radio button',()=>{

    beforeEach(()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html') 
    })

    it('Verify radio button functionality by using click method',()=>{
        cy.get('input[type="radio"]').first().click()
        cy.get('input[type="radio"]').first().should('be.checked')
        cy.get('input[type="radio"]').eq(1).click()
        cy.get('input[type="radio"]').first().should('not.be.checked')
    })

    it('Verify radio button functionality by using check method using common attribute',()=>{
        cy.get('input[type="radio"]').first().check()
        cy.get('input[type="radio"]').first().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check()
        cy.get('input[type="radio"]').first().should('not.be.checked')
    })

    it('Verify radio button functionality by using check method using unique atttribute',()=>{
        cy.get('input[value="green"]').check()
        cy.get('input[value="green"]').should('be.checked')
        cy.get('input[value="yellow"]').check()
        cy.get('input[value="green"]').should('not.be.checked')
    })

    it.only('Verify radio button functionality by using check method by passing value in check method argument',()=>{
        cy.get('input[type="radio"]').check("green")
        cy.get('input[value="green"]').should('be.checked')
        cy.get('input[type="radio"]').check('blue')
        cy.get('input[value="green"]').should('not.be.checked')
    })

})