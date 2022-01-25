//GO REST API==>With bearer tocken

//VERIFY THE COMPLETE SCENARIO OF 1. CREATE USER 2. RETRIVE USER 3. UPDATE USER 4. DELETEUSER

describe('Verify all Go Rest Api request', () => {
    it('Verify the Create User functionality', () => {

        //TO CREATER RANDOM EMAIL ADDRESS
        function GeneratEmailId() {
            let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
            let string = '';
            for (let ii = 0; ii < 15; ii++) {
                string += chars[Math.floor(Math.random() * chars.length)];
            }
            return string + '@gmail.com'
            // Generates a random "Gmail"
        }

        //====================================================================================

        //CREATE NEW USER(POST)
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
            },
            body: {
                "name": "shree ganesha",
                "email": GeneratEmailId(),
                "gender": "female",
                "status": "active"
            }
        }).then((responce) => {
            //cy.log(responce)
            expect(responce.status).to.eql(201)
            expect(responce.body.data).to.have.property('id')
            return responce.body.data['id']

        }).then((id) => {
            //RETRIVE THE USER(GET)
            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v1/users/${id}`,
                headers: {
                    Authorization: "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
                }
            }).then((responce) => {
                //cy.log(responce)
                expect(responce.status).to.eql(200)
                return responce['body']['data']['id']

            }).then((id) => {
                //UPDATE THE USER(PUT)
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    headers: {
                        Authorization: "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
                    },
                    body: {
                        "name": "rajendra swami",
                        "email": GeneratEmailId(),
                        "gender": "male",
                        "status": "inactive",
                        "lang": "Tamil"
                    }
                }).then((res) => {
                    //cy.log(res)
                    expect(res.status).to.eql(200)
                    return res.body.data.id

                }).then((id) => {
                    //DELETE THE USER(DELETE)
                    cy.request({
                        method: "DELETE",
                        url: `https://gorest.co.in/public/v1/users/${id}`,
                        headers: {
                            Authorization: "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
                        }
                    }).then((resp) => {
                        cy.log(resp)
                        expect(resp.status).to.eql(204)
                    })
                })
            })

        })
    })
})