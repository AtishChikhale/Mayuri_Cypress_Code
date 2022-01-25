// We have to create the scenario 
// Create user / Retrive the user / Update the user / Delete the user

describe('Verify the all api scenario', () => {
    it('Verify the list of user and single user API', () => {

        let payLoad = {
            "name": "morpheus",
            "job": "leader"
        }
        //Create User
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users/page2",
            body: payLoad,

        }).then(function (resp) {
            //cy.log(resp.body)
            expect(resp.status).to.eql(201)
            expect(resp['body']).to.have.deep.property('id')
            return resp.body

        }).then(function (response) {
           
            cy.log(response)
            cy.request({
                method: "GET",
                url: `https://reqres.in/api/users/${response.id}`,
                //failOnStatusCode: false

            })
            }).then(function (res) {

                cy.log(res)
                expect(response.body.data.first_name).to.eq(payLoad['name'])
        })

    })
})

//output is not get





