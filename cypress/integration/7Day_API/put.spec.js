//Put request to update data

describe(('Validate the put request'), () => {
    it(('Verify PUT request'), () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body:
            {
                name: "morpheus",
                job: "zion resident"
            }
        }).then((responce) => {
            expect(responce.status).to.eql(200)
            expect(responce.body).to.have.deep.property('updatedAt')
            expect(responce.duration).to.lessThan(400)
            cy.log(responce.headers)
            expect(responce.headers['content-encoding']).to.eql("gzip")
        })
    })
})