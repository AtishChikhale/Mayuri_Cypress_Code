
describe('Validate the XHR "CREATE" Request', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    it('Validate to XHR CREATE request', () => {
        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as("getCreate")

        // cy.get('.network-put.btn.btn-warning').click()
        // cy.wait("@getCreate").should((obj) => {
            //cy.log(obj)

            //Validate the request
            //expect(obj.request.url).to.eql("https://jsonplaceholder.cypress.io/comments")
            //expect(obj.request['headers']['httpVersion']).to.eql("1.1")
            //expect(obj['request']['id']).to.eql("interceptedRequest21")

            // //Validate the responce
            // expect(obj.response.body).to.have.all.keys('body', "email", 'id', 'name')
            // expect(obj.response['headers']['connection']).to.eql("keep-alive")

            cy.get('.network-put.btn.btn-warning').click()
            cy.wait('@getCreate').should(({response:rs,request:re}) => {
                cy.log(rs)
                cy.log(re)
                expect(rs.statusCode).to.eq(200)
                
    
            })

        })


    })

//})