
// beforeEach(() => {
//     cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//     //cy.get('.breadcrumb.traversal-breadcrumb')
// })


describe('Traverse method', () => {
    it("1. children method", () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children("li")
            .should('have.length', 3)
    })

    it('2. first() method to finf first element from children', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children('li')
            .first()
            .should('have.text', 'Home')
    })

    it('3. last() method gives last element from given children', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children("li")
            .last()
            .should('have.attr', 'aria-current', 'page')
    })

    it('4.eq() method need to find specific or in between element', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children('li')
            .eq(1)
            .should('have.contain', 'About Us')
    })

    it('5. sibling() give all sibling', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children('li')
            .siblings()
            .should('have.length', 3)
    })

    it('6.next () give immediate next sibling', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children('li').eq(0)
            .next()
            .should('have.text', 'About Us')
    })

    it('7 next all give list of all next element', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children('li').eq(0)
            .nextAll()
            .should('have.length', 2)
    })

    it('8. nextUntil()', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children('li').eq(0)
            .nextUntil('.active')
            .should('have.contain', 'Us')
    })

    it('9. find() list of the element from given', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .find('li')
            .should('have.length', 3)
    })

    it('10. filter() give specific element from given list', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .children('.breadcrumb-item')
            .filter('.active')
            .should('have.text', 'Contact Us')
    })

    it('11. prev() gives immediate previous sibling', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .find('li').filter('.active')
            .prev()
            .should('have.text', 'About Us')
    })

    it('12. prevAll() gives all prev sibling ', () => {
        //cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .find('li')
            .filter('.active')
            .prevAll()
            .should('have.length', 2)
    })

    it('13. prevUntil() gives the element between both', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons').children().eq(4)
            .prevUntil('a[role="button"]')
            .should('have.length', 3)

    })

    it('14. closest()', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Firstname')
            .closest('table')
            .should('have.attr', 'id', 't01')
    })
    it('15. parent() gives the immediate parent', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb-item').parent()
            .should('have.attr', 'class','breadcrumb traversal-breadcrumb')

    })

    it.only('parents() gives the list of the parents',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Firstname').parents().filter('div')
        .should('have.attr','id','main-header')
    })



})


//=====================================================================================================

describe('traversing method()', () => {
    //1. children method give children of given element
    it('1. children()', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons')
            .children()
            .should('have.length', 5)
    })

    //2. first() =>return first element from list
    it('2. first()', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states')
            .children()
            .first()
            .should('have.text', 'Danger')
    })

    //3. last()=>return the last element from list
    it('3. last()', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states')
            .children()
            .last()
            .should('have.text', 'Alert')
    })

    //4. eq() =>element inbetween two element
    it('4. eq()', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states')
            .children()
            .eq(1)
            .should('have.text', 'Warning')
    })

    //5. closest() =>any upper ancestor 
    it('5. closest()', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('li[id="milk"]')
            .closest('div')
            .should('have.attr', 'class', 'thumbnail')
    })



    it('5. closest()', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Firstname')
            .closest('table')
            .should('have.attr', 'id', 't01')
    })


})