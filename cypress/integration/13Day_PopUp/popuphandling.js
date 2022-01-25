
describe('alretpopup', () => {
    it('alert popu', () => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am an alert box!')
        })
    })

    it('confirm popup', () => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.contain', 'pressed OK!')
    })

    it('confirm popup', () => {
        cy.visit('http://www.webdriveruniversity.com/Popup-Alerts/index.html')
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')
    })


    it('validate the prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj) => {
            cy.stub(obj, 'prompt').returns('hello')
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text', 'You entered: hello')
        })

    })

    //trial
    // it('validate the prompt', () => {
    //     cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    //     cy.on('window:confirm', (str) => {
    //         expect(str).expect('I am a JS prompt')
    //         return false
    //     })
    //     cy.get('#result').should('have.text', 'You entered: null')
    // })

    //CODE FOR PROMPT AFTER CLICKING ON CANCEL BUTTON IN PROMPT POPUP
    it.only('validate the prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(obj => {
            cy.stub(obj, 'prompt').callsFake(() => null)
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text', 'You entered: null')
        })

    })






})