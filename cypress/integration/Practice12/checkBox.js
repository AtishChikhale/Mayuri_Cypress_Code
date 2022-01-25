

// describe('Verify the checkbox functionality',()=>{
//     it('Verify the checjboc with click method',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[type="checkbox"]').first().click().should('be.checked').and('have.value','option-1')
//         cy.get('input[type="checkbox"]').first().click().should('not.be.checked').and('have.value','option-1')

//     })

//     it('verify the checkbox by using check method',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[type="checkbox"]').first().check('option-1').should('be.checked')
//         cy.get('input[type="checkbox"]').first().uncheck('option-1').should('not.be.checked')
//     })

//     it.only('Verify the checekbox by check multiple value',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4'])
//         cy.get('input[type="checkbox"]').should('be.checked')
//     })
// })


///VERIFY THE CHECKBOX

// describe('Verify the checkboc functionality', () => {
//     it('Verify the checkbox functionality with click method', () => {
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[type="checkbox"]').first().click().should('be.checked')
//         cy.get('input[type="checkbox"]').eq(2).click().should('not.be.checked')
//     })

//     it('verify the checkbox functionality with check method', () => {
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[type="checkbox"]').first().check().should('be.checked')
//         cy.get('input[type="checkbox"]').last().check('option-4').should('be.checked')
//         cy.get('input[type="checkbox"]').last().uncheck('option-4').should('not.be.checked')
//     })

//     it.only('Verify the functionality of checkbox wuth multiple checkbox', () => {
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
//         cy.get('input[type="checkbox"').should('be.checked')
//         cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-2', 'option-3', 'option-4'])
//         cy.get('input[type="checkbox"').should('not.be.checked')
//     })
// })

