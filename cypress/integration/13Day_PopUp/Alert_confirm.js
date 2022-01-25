
describe('Verify Alert popup', () => {

    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
    })

    //Alert Popup Handling
    // it('Verify the alert popup', () => {
    //     cy.get('#button1').click()
    //     cy.on('window:alert', (str) => {
    //         expect(str).to.equal("I am an alert box!")
    //     })
    // })

    // //Window Popup handling
    // it('Verify confirm popup', () => {
    //     cy.get('#button4').click()
    //     cy.on('window:confirm', (str) => {
    //         expect(str).to.eql('Press a button!')
    //     })
    //     cy.get('#confirm-alert-text').should('be.visible')
    // })

    // //Window confirm by using positive and negetive assertion
    // //POSITIVE
    // it('Window confirm positive scenario', () => {
    //     cy.get('#button4').click()
    //     cy.on('window:confirm', (str) => {
    //         expect(str).to.eql('Press a button!')
    //         return true
    //     })
    //     cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    // })

    // //NEGETIVE
    // it('Window confirm negetive scenario', () => {
    //     cy.get('#button4').click()
    //     cy.on('window:confirm', (str) => {
    //         expect(str).to.eql('Press a button!')
    //         return false
    //     })
    //     cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    // })

    //BY USUING COSTOM COMMAND
    it('Confirm popup positive scenario by using custom commads', () => {
        cy.confirmPopup('#button4', 'Press a button!', true, 'You pressed OK!')
    })

    it('Confirm popup negetive scenario by using custom commads', () => {
        cy.confirmPopup('#button4', 'Press a button!', false, 'You pressed Cancel!')
    })


    // /////////////////////////////////////////EXTRA/////////////////////////////////////////////

    // it('Valdate normal dom popup', () => {
    //     cy.get('#button2').click()
    //     cy.get('.modal-title').should('have.text', 'It’s that Easy!!  Well I think it is.....')
    //     cy.contains('Close').click()
    //     cy.get('.modal-title').should('not.be.visible')
    // })




    //SIR ASSIGNMENT===>>not work
    // it.only('verify the contents', () => {
    //     cy.intercept({
    //         method: 'GET',
    //         url: 'http://www.webdriveruniversity.com/Ajax-Loader/js/respond.js'
    //     }).as('req')
    //     cy.wait('@req').then((el) => {
    //         cy.log(el)
    //         cy.get('#button3').click()
    //         cy.get('#button1').should('be.visible').click()
    //         cy.get('.modal-title').should('be.visible')
    //     })

})
