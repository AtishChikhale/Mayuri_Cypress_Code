//Delete request to delete data

describe(('Varify the delete request'), () => {
    it(('Verify DELETE request'), () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2",
            headers: {
                connection: "keep-alive"
            }
        }).then((responce) => {
            expect(responce.duration).to.be.lessThan(500)
            expect(responce.status).to.eql(204)
            expect(responce.headers['server']).to.eql('cloudflare')
        })
    })
})