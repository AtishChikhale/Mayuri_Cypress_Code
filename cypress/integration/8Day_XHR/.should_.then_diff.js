
describe('', () => {

    it('Validate the XHR "GET" request', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as("getBody")

        cy.contains('Get Comment').click()
    //********************************THEN*************************************
        cy.wait('@getBody').then((obj) => {

            obj.response.body.name = "mayuri"
            //cy.log(obj)
            expect(obj.response.statusCode).to.eq(200)
            expect(obj.response.body).to.have.property('id')
            //expect(obj.response.duration).to.greaterThan(10000) =>wrong code
            expect(obj.response['headers']['connection']).to.eq("keep-alive")
            expect(obj.response['body']).to.have.all.keys('body', 'email', 'name', 'postId', 'id')
            return obj.response.body.id //return id only
        }).then((el) => {
            cy.log(el)
            expect(el).to.eql(1)
        })
    })
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    it('Validate the XHR "GET" request', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as("getBody")

        cy.contains('Get Comment').click()
        //******************************SHOULD**************************
        cy.wait('@getBody').should((obj) => {

            obj.response.body.name = "mayuri"
            //cy.log(obj)
            expect(obj.response.statusCode).to.eq(200)
            expect(obj.response.body).to.have.property('id')
            //expect(obj.response.duration).to.greaterThan(10000) =>wrong code
            expect(obj.response['headers']['connection']).to.eq("keep-alive")
            expect(obj.response['body']).to.have.all.keys('body', 'email', 'name', 'postId', 'id')
            //return obj.response.body.id =>used or not used it return object only
        }).then((el) => {
            cy.log(el)
            //expect(el).to.eql(1)
        })
    })

})


