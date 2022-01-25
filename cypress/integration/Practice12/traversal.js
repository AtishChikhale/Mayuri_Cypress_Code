describe("traversal method", () => {
    it('1. children method', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    it('2. first()method', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text', 'Fruits')
    })

    it('3. last method', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().last().should('have.contain', "Sales")
    })

    it('4. find method', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('tr.bg-info').find('th').should('have.length', 3)
    })

    it('5. filter method', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-group.btn-group-toggle').children().filter('.btn.btn-primary.active').should('have.text', 'Button-1')
    })

    it('6. sibling()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn.btn-primary.active').siblings().should('have.length', '3')
    })

    it('7. closest()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.pagination.traversal-pagination').closest('div').should('have.attr', 'class', 'thumbnail')
    })

    it('8. next()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').next().should('have.text', 'Tea')
    })

    it('9.next all()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length', 10)
    })

    it('10.next until', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)
    })

    it('11. parent', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parent().should('have.attr', 'class', 'traversal-food-list')
    })

    it('12.parents()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').parents().should('have.attr', 'class', 'thumbnail')
    })

    it.only('13. prev', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.sales').prev().should('have.text', 'Technology')
    })

    it.only('14. prevAll()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.sales').prevAll().should('have.length', 2)
    })

    it.only('15. prevUntil', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
    })

    it.only('16.eq()', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(3).should('have.text', 'Blackberries')
    })

    it.only('17. parentsUntil', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.thumbnail').parentsUntil('#main-header').should('have.contain','Data, Tables & Button States')
    })

    it.only('18. not() method', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().not('#coffee').should('have.length', 4)
    })
})