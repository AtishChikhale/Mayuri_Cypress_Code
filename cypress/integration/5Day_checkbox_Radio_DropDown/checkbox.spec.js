//CheckBox
//1. By using click() method
//2. By using check() method
//3. By using check method by passing value in argument as like =>check('value') method
//4. By using check method by passing array in check method argument =>check(['arg1','arg2','arg3'])

//Note: we can select multiple checkbox by passing aray in check method

describe('Verify the checkbox', () => {

    it('Verify checkbox by using click method', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').first().click()
        cy.get('input[type="checkbox"]').first().should('be.checked')
        cy.get('input[type="checkbox"]').first().click()
        cy.get('input[type="checkbox"]').first().should('not.be.checked')


        //****************************OR*******************************/

        cy.get('#checkboxes').children().first().click()
        cy.get('input[value="option-1"]').should('be.checked')
        cy.get('#checkboxes').children().first().click()
        cy.get('input[value="option-1"]').should('not.be.checked')

    })

    it('Verify checkbox by using check method', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[value="option-1"]').should('be.checked')
        cy.get('input[type="checkbox"]').first().uncheck()
        cy.get('input[value="option-1"]').should('not.be.checked')

    })

    it('Verify checkbox by using check method', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[value="option-1"]').should('be.checked')
        cy.get('input[type="checkbox"]').first().uncheck()
        cy.get('input[value="option-1"]').should('not.be.checked')

    })

    it('Verify the functionality of checkbox by using check method by passing value', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check("option-1")
        cy.get('input[value="option-1"]').should('be.checked')
        cy.get('input[type="checkbox"]').first().uncheck('option-1')
        cy.get('input[value="option-1"]').should('not.be.checked')
    })

    it.only('Verify the functionality of checkbox by using check method by passing value', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
        cy.get('input[type="checkbox"]').should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4'])
        cy.get('input[type="checkbox"]').should('not.be.checked')

    })
})

