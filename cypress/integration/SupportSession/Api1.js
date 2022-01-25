describe('Verify All Api Request', () => {
    it('Verify The get Request', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((responce) => {
            //cy.log(responce)
            expect(responce.status).to.eql(200)
        })
    })
})