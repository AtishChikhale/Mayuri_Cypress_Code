
//GO REST WITH UTILITY
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

        //=======================================================

        let payLoad = {
            "name": "rajendra swami",
            "email": GeneratEmailId(),
            "gender": "male",
            "status": "inactive",
            "lang": "Tamil"
        }

        //====================================================================================

        //CREATE NEW USER(POST)
        cy.apiRequest('POST', 'https://gorest.co.in/public/v1/users', payLoad)
            .then((responce) => {
                //cy.log(responce)
                expect(responce.status).to.eql(201)
                expect(responce.body.data).to.have.property('id')
                return responce.body.data['id']
            }).then((id) => {

                //RETRIVE THE USER(GET)
                cy.apiRequest('GET', `https://gorest.co.in/public/v1/users/${id}`)
                    .then((responce) => {
                        //cy.log(responce)
                        expect(responce.status).to.eql(200)
                        return responce['body']['data']['id']

                    }).then((id) => {

                        //UPDATE THE USER(PUT)
                        cy.apiRequest('PUT', `https://gorest.co.in/public/v1/users/${id}`, payLoad)
                    }).then((res) => {
                        //cy.log(res)
                        expect(res.status).to.eql(200)
                        return res.body.data.id

                    }).then((id) => {
                        //DELETE THE USER(DELETE)
                        cy.apiRequest('DELETE', `https://gorest.co.in/public/v1/users/${id}`)
                            .then((resp) => {
                               // cy.log(resp)
                                expect(resp.status).to.eql(204)
                            })
                    })
            })

    })
})
