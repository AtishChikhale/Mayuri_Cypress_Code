//api chaining

describe("Verify the api request", () => {
    it('Verify the get request', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((res) => {
            expect(res.status).to.eql(200)
            return res.body.data.find((el) => el.id == 8)
        }).then((obj) => {

            // we want to user with id user

            cy.request({
                method: "GET",
                url: `https://reqres.in/api/users/${obj.id}`
            }).then((resp) => {
                cy.log(resp)
                expect(resp.body.data.first_name).to.eql('Lindsay')
                expect(resp.body.data.email).to.eql('lindsay.ferguson@reqres.in')
                expect(resp.body.data.email).includes(resp.body.data.first_name.toLowerCase())

            })
        })
    })
})