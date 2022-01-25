
describe('verify xhr request', () => {
    it('verify the xhr request', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.intercept({
            method: "GET",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('obj')


        //RESPONSE
        cy.get('.well button').first().click()
        cy.wait('@obj').should((obj1) => {
            cy.log(obj1)
            expect(obj1.response.body.email).to.eql("Eliseo@gardner.biz")
            expect(obj1.response.statusCode).to.eq(200)
            expect(obj1.response['headers']).to.have.property('cf-ray')
            expect(obj1.response.body).to.have.property('id')
            expect(obj1.response.body).to.have.all.keys('body', 'email', 'id', 'name', 'postId')
        

        //REQUEST
        expect(obj1.request.responseTimeout).to.eql(30000)
        expect(obj1.request.headers.accept).to.eql('*/*')

    })

})
})