
describe('Dynamic dropdown',()=>{
    it('dynamic dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ban')

        cy.get('.ui-menu-item').each((el)=>{
            if(el.text()==="Bangladesh"){
                el.click()
            }
        })
        cy.get('#autocomplete').should('have.value','Bangladesh')
    
    })
})