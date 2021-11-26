//Traverse Method

describe('traverse method in cypress', () => {

    //1. Children() => Give children of given parent
    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
            .children('.active')
            .should('have.text', 'Contact Us')
    })

    //===================================================================================

    //2. eq() => random children by using index
    it('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class ="traversal-drinks-list"]')
            .children()
            .eq(2)
            .should('have.text', 'Milk')
    })

    //====================================================================================

    //3. first() => first children by using index
    it('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .children()
            .first()
            .should('have.text', 'Coffee')
    })

    //======================================================================================

    //4. last() => last children by using index
    it('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .children()
            .last()
            .should('have.text', 'Sugar')
    })

    //======================================================================================

    //5. closest() => upper parent of given element
    it('To get the closest ancestor DOM element, use the .closest() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').closest('ul').should('have.attr', 'class', 'traversal-drinks-list')
        cy.get('#sugar').closest('div').should('have.attr', 'class', 'thumbnail')
    })

    //==================================***Next Day***====================================================

    //6. filter() =>
    it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list >li ')
            .filter('#espresso')
            .should('have.text', 'Espresso')
    })
    //OR
    //if in any element there is class and between word there is space that means there are 2 classes so we used as like 68 line format
    it('To get DOM elements that match a specific selector, use the .filter() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb >li')
            .filter('.active')
            .should('have.text', 'Contact Us')
            .should('have.contain', 'Us') // in contain method we can used partial word
            .should('have.attr', 'aria-current', 'page')
    })

    //====================================================================================================

    //7. find() => if we having table in that there is head and we know how many row in the table below that head i.e.descendent we have also if we know how many object there are in any website fine method required
    it('To get descendant DOM elements of the selector, use the .find() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .find('li') //list
            .should('have.length', 5)

        cy.get('.traversal-drinks-list')
            .find('li')
            .filter('#coffee')
            .should('have.text', 'Coffee')
    })

    //====================================================================================================

    //8. next() => in order to find immediate next sibling we are using next method
    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .children('li')
            .eq(0).next()
            .should('have.text', 'Tea')
    })

    //OR
    it('To get the next sibling DOM element within elements, use the .next() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .children('li')
            .filter('#tea').next()
            .should('have.text', 'Milk')
            .should('have.length', 1)
    })

    //=================================================================================================

    //9. nextall() =>this method give all next sibling of given one
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .children('li')
            .eq(0).nextAll()
            .should('have.length', 4)
    })

    //=================================================================================================

    //10. nextUntil() => if we want sibling between the range we used nextUntil method
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list')
            .children('li')
            .filter('#fruits')
            .nextUntil('#veggie')
            .should('have.length', 5)
    })

    //===============================================================================================

    //11. sibiling() =>If we want all sibling we used sibiling method
    it('To get all sibling DOM elements of elements, use the .siblings() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb-item.active')
            .siblings()
            .should('have.length', 2)
    })

    //===============================================================================================

    //12. prevUntil() =>if we want dom element btween two sibling we used this method
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Sugar')
            .prevUntil('#coffee')
            .should('have.length', 3)
    })

    //=============================================================================================

    //13. prevAll() => if we want all previous sibling of given weused prevAll command
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso')
            .prevAll()
            .should('have.length', 3)
    })

    //================================================================================================

    //14. prev => if we want immediate previous sibling the we used prev method
    it('To get the previous sibling DOM element within elements, use the .prev() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.contains('Ban')
            .prev()
            .should('have.text', "Apple")
    })

    //================================================================================================

    //15. parent =>this method gives the any parent of given element
    it('To get parent DOM element of elements, use the .parent() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .parent()
            .should('have.attr', "class", "thumbnail")
        cy.get('#coffee')
            .parent()
            .should('have.attr', 'class', 'traversal-drinks-list')
    })

    //=================================================================================================
    //16. parents =>gives us the all parent of given 
    it('To get parents DOM element of elements, use the .parents() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb-item.active')
            .parents()
            .filter("nav")
            .should('have.attr', 'aria-label', 'breadcrumb')
    })

    //================================================================================================

    //17. parent Until
    it('parent', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
            .parentsUntil('#main-header')
            .should('have.contain', 'Data')
    })

    //OR
    it("To get parents DOM element of elements until other element, use the .parentsUntil() command", () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html#')
        cy.contains('Firstname')
            .parentsUntil('#thumbnail-1')
            .should('have.length', 3)
    })

    //==================================================================================================

    //18. not() => to remove any element from ny list or anything we used not
    it.only('To remove DOM element(s) from the set of elements, use the .not() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
            .find('li')
            .not('#coffee')
            .should('have.length', 4)
    })



})
