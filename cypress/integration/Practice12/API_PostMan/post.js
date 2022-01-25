
describe('Verify the post request', () => {
    it('verify the post request', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((responce)=>{
            cy.log(responce)
            expect(responce.status).to.eql(201)
            expect(responce.duration).to.be.greaterThan(100)
            expect(responce.body).to.have.property('id')
            expect(responce.body).to.have.all.keys('name','job','id','createdAt')
            //expect(responce.body).to.have.all.keys('name', 'job', 'id', 'createdAt')
            expect(responce.headers['server']).to.eql('cloudflare')
        })
    })
})