
describe("Network requests", () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests')
    })

    // Here we can Validate =>
    // REQUEST=> The Request body,Request header
    // RESPONCE=> Responce body,Responce header,Responce status,Responce duration

    //Validate responce status
    it('Validate the XHR "GET" request', () => {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as("getRequest")


        cy.contains('Get Comment').click()
        cy.wait('@getRequest').its('response.statusCode').should('eql', 200)

    })

    //Validate response body
    it('Validate the XHR "GET" request', () => {
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as("getBody")


        cy.contains('Get Comment').click()
        cy.wait('@getBody').should((obj) => {
            cy.log(obj)
            expect(obj.response.statusCode).to.eq(200)
            expect(obj.response.body).to.have.property('id')
            //expect(obj.response.duration).to.greaterThan(10000) =>wrong code
            expect(obj.response['headers']['connection']).to.eq("keep-alive")
            expect(obj.response['body']).to.have.all.keys('body', 'email', 'name', 'postId', 'id')
        })
    })

    //Validate request body
    it.only('Validate the GET XHR request body', () => {

        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('getRequest')


        cy.contains('Get Comment').click()
        cy.wait('@getRequest').should((obj) => {
            cy.log(obj)
            expect(obj.request.method).to.eql("GET")
            expect(obj.request['responseTimeout']).to.eq(30000)
            expect(obj.request['headers']['sec-fetch-dest']).to.eql('empty')
        })
    })
})






