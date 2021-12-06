//dropdown which gives value when we try to tap anything in search bocx known as dynamic dropdown

describe('Validate te dynamic dropdown',()=>{
    it('validate the dynamic dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind')
        cy.get('#ui-id-1').find('li').each((el)=>{
            if(el.text()=="India"){
                el.click()
            }
        }).then(()=>{
            cy.get('#autocomplete').should('have.value','India')
        })
    })
})
