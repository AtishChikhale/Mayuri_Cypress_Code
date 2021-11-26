
describe('traverse method to navigate one branch to another',()=>{

    //1. children
    it('children method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
        .children('.active')
        .should('have.text','Contact Us')
    })

    //2. eq()
    it('eq() method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
        .children('li')
        .eq(2)
        .should('have.contain','Us')
    })

    //3. first()
    it('first method for 1st element in children',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb >li')
        .first()
        .should('have.text','Home')

    })
   
    //4. last()
    it('last method to get last element in list of children',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb >li')
        .last()
        .should('have.text',"Contact Us")
    })

    //5. closest()
    it('closest method give upper parent of given children',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.breadcrumb.traversal-breadcrumb')
        .closest('div')
        .should('have.attr','class','thumbnail')
    })

    //6. find()
    it('find method fine below row or elemnt of parent',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
        .find("li")
        .should('have.length',5)
    })

    //7. filter()
    it('filter() the specific element in children',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list')
        .children('li')
        .filter('#tea')
        .should('have.text','Tea')
    })

    //8. next() =>immediate next sibiling
   it('next element of given sibling',()=>{
       cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
       cy.get('.traversal-drinks-list >li')
       //.children('li')
       .eq(0).next()
       .should('have.attr','id','tea')
   })

   //9. nextAll()
   it('next all element below given child',()=>{
       cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
       cy.get('.traversal-drinks-list >li')
       .eq(1)
       .nextAll()
       .should('have.length',3)
   })

   //10. nextUntil =>between children
    it.only('element between two children',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list >li')
        .filter('#fruits').nextUntil('#veggie')
        .should('have.length',5)
    })

})