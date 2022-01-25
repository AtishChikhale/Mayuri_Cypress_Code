describe('verify the put request', () => {
    it('verify the put request', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            },
            headers: {
                "connection": "keep-alive"
            }
        }).then((responce)=>{
            expect(responce.status).to.eql(200)
            expect(responce.headers['alt-svc']).to.eql('h3=":443"; ma=86400, h3-29=":443"; ma=86400, h3-28=":443"; ma=86400, h3-27=":443"; ma=86400')
            expect(responce.body).to.have.property('name')
            expect(responce.duration).to.be.greaterThan(100)
        })
    })
})