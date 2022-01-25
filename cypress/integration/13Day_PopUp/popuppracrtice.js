

describe('verify the popup window', () => {
    it('verify the popup', () => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert',(str)=>{
            expect(str).to.eql('I am an alert box!')
        })
    })

    it('verify confirm popup',()=>{
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eql('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
    })

    it('verify confirm popup',()=>{
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm',(str)=>{
            expect(str).to.eql('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text','You pressed Cancel!s')
    })

    it('verify prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('')
    })
})