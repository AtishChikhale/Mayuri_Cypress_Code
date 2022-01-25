// describe('Verify the dropdown having select tab',()=>{
//     it('verify the normal dropdown',()=>{
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('#dropdowm-menu-1').select('C#').should('have.value','c#')
//         cy.get('#dropdowm-menu-1').select('python').should('have.contain','Python')
//         cy.get('#dropdowm-menu-1').select('SQL').should('have.value','sql')
//     })
// })


describe('Verify the select menu dropdown',()=>{
    it('verify the select tag dropdown',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-2').select('Eclipse').should('have.value','eclipse')
        cy.get('#dropdowm-menu-2').select('maven').should('have.contain','Maven')
    })
})

