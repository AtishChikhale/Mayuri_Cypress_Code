//Post =>create the data

describe(('Validate to API Post request'), () => {
    it(('Verify POST request'), () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body:
            {
                "name": "morpheus",
                "job": "leader"
            }

        }).then((responce) => {
            expect(responce.status).to.eql(201)
            expect(responce.body).to.have.deep.property('id')
            expect(responce.body).to.have.all.keys('name', 'job', 'id', 'createdAt')
            cy.log(responce.body)
            expect(responce.duration).to.be.lessThan(900)
            cy.log(responce.headers)
            expect(responce.headers['cf-cache-status']).to.eql("DYNAMIC")
        })
    })
})






































