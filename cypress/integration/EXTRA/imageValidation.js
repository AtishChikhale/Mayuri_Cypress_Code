describe('Image Validation', () => {
    it('Image validation', () => {
        //cy.get('form').find('img').should('have.attr', 'src').should('include','My-Logo')
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.item-img').should('attr', 'src', "http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg")
    })
})