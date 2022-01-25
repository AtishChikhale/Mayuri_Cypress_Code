describe('verify the post xhr requet', () => {
    it('verify the post request', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as('obj1')
    

    cy.get('.network-post.btn.btn-success').click()

    //Responce
    cy.wait('@obj1').should((ob)=>{
        cy.log(ob)
        expect(ob.response.body).to.have.all.keys('body','email','id','name')
        expect(ob.response.headers.connection).to.eql("keep-alive")
        expect(ob.responseWaited).to.eql(true)

    //Request
        expect(ob.request.headers.connection).to.eql("keep-alive")
        expect(ob.request.httpVersion).to.eql("1.1")
    })

    

   
})
})