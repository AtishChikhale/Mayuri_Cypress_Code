//PAYPAL API 
describe('Verify the payPal API', () => {
    it('verift for the TOCKEN', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: "Basic QVhsWTgxcTdUQWs0ZGZmdFVXV0Ryc1lyQ2RVTGdUQ2ZKbVlSdVRZd0RGNFp2ZzM2T3RiRnhkbnBMVnUtSndOS3ljNWpMWUZJYmZWV1VFbDA6RUVKamd1QjM4bzJRLVByaGp6WmxIaElOTHN1SHJRQ1lVNW5QVWFNcmhuWFJqcUpvWHpKRDVCN2hHSVVjNWQxYmk5azRGQ0d0VThscUd4RGM=,"
            },
            body: {
                grant_type: "client_credentials"
            },
            form: true
        }).then((resp) => {
            //cy.log(resp)
            return resp.body.access_token
        }).then((token) => {
            cy.log(token)

            cy.request({
                method: "POST",
                url: "https://api-m.sandbox.paypal.com/v2/checkout/orders",
                headers: {
                    "Authorization": "Bearer A21AAK9fKaaijtLs-iKief02QFN2CCVXCnQj2ku0wwe4O7npxvHmNkXgMi19i-p28gRMMsnjShmPCuJwtC8dE7IHcKAp93s4A",
                    "content-type": "application/json"
                },
                body: {

                    "intent": "CAPTURE",
                    "purchase_units": [
                        {
                            "amount": {
                                "currency_code": "USD",
                                "value": "100.00"
                            }
                        }
                    ]
                }
            }).then((resp)=>{
                cy.log(resp)
                expect(resp.body.links).to.have.length(4)
                expect(resp.status).to.eql(201)
            })
        })
    })
})