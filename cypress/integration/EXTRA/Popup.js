//There are two type sof popup
//1. Alert
//2. Confirm

//Cypress can handle the popup automatically
//but in order to test we fire the event and check the popup text

describe('Validate the popup', () => {
    it('Validate the popup', () => {
    
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (str1) => {
            expect(str1).to.eqls('I am an alert box!')
        })


        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eqls('Press a button!')
            return true
            
        }).then(()=>{
            cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
        })

        
    })
})