//FOR PRACTICE:
//https://the-internet.herokuapp.com/

describe('Verify prompt popup in cypress', () => {
    //for prompt
    it('Verify the prompt popup in cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj) => {
            cy.stub(obj, 'prompt').returns('hello')
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text', 'You entered: hello')
        })
    })
    
    //for confirm
    it('Verify the confirm popup in cypress',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj)=>{
            cy.stub(obj,'confirm').returns(true)
            cy.get('button[onclick="jsConfirm()"]').click()
            cy.get('#result').should('have.text','You clicked: Ok')
        })
    })

     //for alert
     it('Verify the confirm popup in cypress',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj)=>{
            cy.stub(obj,'alert').returns(true)
            cy.get('button[onclick="jsAlert()"]').click()
            cy.get('#result').should('have.text','You successfully clicked an alert')
        })
    })
})