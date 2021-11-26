
describe('Traverse method practice 11/8', () => {
    it('1. children() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('ul[id="homefeatured"]').children().should('have.length', 7)
    })

    it('2. first() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').first().should('have.attr', 'class', 'htmlcontent-item-1 col-xs-4')
    })

    it('3. last() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').last().should('have.attr', 'class', 'htmlcontent-item-5 col-xs-4')
    })

    it('4. eq() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(2).should('have.attr', 'class', 'htmlcontent-item-3 col-xs-4')
    })

    it('5. sibling() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(0).siblings().should('have.length', 4)
    })

    it('6. find() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').should('have.length', 5)
    })

    it('7. filter() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').filter('.col-xs-4').should('have.length',5)
    })

    it('8. closest() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').closest('div').should('have.attr','id','htmlcontent_home')
    })

    it('9. next() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(0).next().should('have.attr','class','htmlcontent-item-2 col-xs-4')
    })

    it('10. nextAll() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(0).nextAll().should('have.length',4)
    })

    it('11. nextUntil() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(0).nextUntil('.htmlcontent-item-5.col-xs-4').should('have.length',3)
    })

    it('12. prev() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(4).prev().should('have.attr','class','htmlcontent-item-4 col-xs-4')
    })

    it('13. prevAll() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(4).prevAll().should('have.length',4)
    })

    it('14. prevUntil() method', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(4).prevUntil('.htmlcontent-item-1.col-xs-4').should('have.length',3)
    })

    it('15. parent() method',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').parent().should('have.attr',"class","htmlcontent-home clearfix row")

    })

    it('16. parents() method',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').parents('div').should('have.attr',"id","htmlcontent_home")

    })

    it('17. parentsUntil() method',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').eq(0).parentsUntil('#htmlcontent_home').should('have.length',1)

    })

    it('18. not() method',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#htmlcontent_home').children().find('li').not('.htmlcontent-item-1.col-xs-4').should('have.length',4)

    })

})