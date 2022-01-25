describe('Verify coop request API', () => {
    it('Verify coop API', () => {
        let token = null
        let id = null

        //FOR TOKEN GENERATION
        cy.request({
            method: "POST",
            url: "http://coop.apps.symfonycasts.com/token",
            form: true,
            body: {
                client_id: "MakeMyTrip",
                client_secret: "b1591959f9022e3f6a1f1d2c3370c0db",
                grant_type: "client_credentials"
            }
        }).then((obj) => {
            //cy.log(obj)
            expect(obj.status).to.eql(200)
            //return obj.body.access_token
            token = obj.body.access_token
            //cy.log(token)

        }).then(() => {
            //cy.log(token)

            //FOR 1 API CALL
            cy.request({
                method: "GET",
                url: "http://coop.apps.symfonycasts.com/api/me",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                //cy.log(res)
                id = res.body.id
            }).then(() => {
                cy.log(id)

                //FOR 2 API CALL
                cy.request({
                    method: "POST",
                    url: `http://coop.apps.symfonycasts.com/api/${id}/barn-unlock`,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((resp) => {
                    cy.log(resp)
                    expect(resp.body.message).includes('You just unlocked your barn! Watch out for strangers!')
                }).then(()=>{

                    //FOR 3 API CALL
                    cy.request({
                        method:"POST",
                        url:`http://coop.apps.symfonycasts.com/api/${id}/toiletseat-down`,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }).then((resp)=>{
                        cy.log(resp)
                        expect(resp.body.message).of.eql("You just put the toilet seat down. You're a wonderful roommate!")
                    })
                })
            })
        })
    })
})