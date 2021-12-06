
describe('Validate the XHR "POST" Request', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Validate to XHR POST request', () => {
        cy.intercept({
            method: "POST",
            url: "https://jsonplaceholder.cypress.io/comments"
        }).as("getPost")

        cy.get('.network-post.btn.btn-success').click()
        cy.wait("@getPost").should((obj) => {
            cy.log(obj)

            //Validate the request
            expect(obj.request.url).to.eql("https://jsonplaceholder.cypress.io/comments")
            expect(obj.request['headers']['accept-encoding']).to.eql("gzip, deflate, br")
            expect(obj.request.responseTimeout).to.eql(30000)

            //Validate the responce
            expect(obj.response.body).to.have.all.keys('body', "email", 'id', 'name')
            expect(obj.response['headers']['connection']).to.eql("keep-alive")
           

        })


    })

})



