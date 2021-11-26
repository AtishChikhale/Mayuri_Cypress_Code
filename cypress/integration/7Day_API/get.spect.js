//GET  =>For retrive the data

describe('Validate the API Get Request', () => {
    it('Validate get', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
            headers: {
                connection: "keep-alive"
                //accept:"*/*"
            }

        }).then((responce) => {
            //Here we can validate 1. status ,2.duration ,3. Body ,4. Header
            expect(responce.status).to.eql(200)
            expect(responce.duration).to.be.lessThan(200)
            expect(responce.body).to.have.property('page')
            expect(responce.headers['content-encoding']).to.eql('gzip')
        })
    })

})