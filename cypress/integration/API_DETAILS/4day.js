
//As we used cy.request command everywhere i crete the costom commad in support/commands.js

describe('Verify the api with bearer tocken', () => {
    // it('Verify Api with bearer tocken', () => {

    //     cy.request({
    //         method: "GET",
    //         url: "https://gorest.co.in/public/v1/users",
    //         headers: {
    //             Authorization: 'Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50'
    //         }
    //     }).then((res) => {
    //         //cy.log(res)
    //         expect(res.status).to.eql(200)
    //         expect(res.body.data).to.have.length(20)
    //         return res.body.data.find((el) => {
    //             return el.id == 31
    //         })
    //     }).then((el) => {
    //         cy.request({
    //             method: "GET",
    //             url: `https://gorest.co.in/public/v1/users/${el.id}`
    //         }).then((el) => {
    //             expect(el.body.data.name).to.eql("Pushti Somayaji")
    //         })
    //     })

    // })

    it('Verify the API with custom commands', () => {
        cy.GetAPIData('GET', 'https://gorest.co.in/public/v1/users')
    }).then((res) => {
        cy.log(res)
        // expect(res.status).to.eql(200)
        // expect(res.)
    })
})




























