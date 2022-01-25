
describe('Verify the action class functionality', () => {
    it('Verify the action SCROLL FUNCTIONALITY class', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions', { timeout: 2000 }).scrollIntoView().invoke('removeAttr', 'target').click()
        cy.url().should('include', 'Actions')
    })


    it('Verify the action class functionality ', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        cy.get('div #draggable').trigger('mousedown', { button: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })

    })

    it('verify the drag and drop option in web page', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('div  #droppable >p >b').should('have.text', 'Dropped!')
    })

    it.only('Verify the dbl click over the element', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick().should('have.attr', 'class', 'div-double-click double')

    })

    it.only('Verify the mouseOver contains', () => {
        cy.visit('http://www.webdriveruniversity.com/Actions/index.html')
        cy.get('button[class="dropbtn"]').first().trigger('mouseover')
        cy.get('a[class="list-alert"]').first().click({ force: true }).should('have.text', 'Link 1')
        cy.on('window:alert', (str) => {
            expect(str).to.eql('Well done you clicked on the link!')
        })
    })

})