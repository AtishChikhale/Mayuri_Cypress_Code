describe('verify the update request', () => {
    it('verify teh update request', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            method: "PUT",
            url: "https://jsonplaceholder.cypress.io/comments/1"
        }).as('obj')
        cy.get('.network-put.btn.btn-warning').click()
        cy.wait('@obj').should((obj) => {

            //request
            cy.log(obj)
            expect(obj.request).to.have.property('body')
            expect(obj.request.responseTimeout).to.be.greaterThan(20000)

            //responce
            expect(obj.response.headers['connection']).to.eql("keep-alive")
        })
    })
})