
// describe('Verify the get request', () => {
//     it('verify the get request', () => {
//         cy.request({
//             method: "GET",
//             url: "https://reqres.in/api/users?page=2",
//             header: {
//                 "Connection": 'keep-alive'
//             }
//         }).then((responce) => {
//             cy.log(responce)
//             expect(responce.status).to.eql(200)
//             expect(responce.duration).to.be.lessThan(250)
//             expect(responce.body).to.have.property('page')
//             expect(responce.headers['cache-control']).to.eql("max-age=14400")

//         })


//     })
// })

//===========================================================================================================


describe('Verify the GET request', () => {
    it('verify the get request', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2",
            headers: {
                "Accept": "*/*"
            }
        }).then((responce) => {
            cy.log(responce)
            expect(responce.status).to.eql(200)
            expect(responce.duration).to.be.lessThan(500)
            expect(responce.body).to.have.property('page')
            expect(responce.body['data']).be.length(6)
        })
    })
})