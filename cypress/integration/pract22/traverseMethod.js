describe('Verify the traverse method on the webpage',()=>{

    //1. children()
    it('Verify the children()method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length',5)
    })

    //2. eq()
    it('Verify the eq()method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').find('li').eq(0).should('have.text','Coffee')
    })

    //3. first()
    it('Verify the first()method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').find('ul').find('li').first().should('have.contain','Finance')
    })

    //4. last()
    it('verify the last element from list',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').find('ul').find('li').last().should('have.text','Sales')
    })

    //5. next()
    it('Verify the next() method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().filter('#fruits').next().should('have.text','Apple')
    })

})