//DropDown
//There are two type
//1. Having select tab

describe('Verify the functionality of dropdown by using select tag', () => {

    it('Verify dropdown having select tag', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('sql').should('have.contain', 'SQL')
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value', 'java')
        cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python')

    })
})