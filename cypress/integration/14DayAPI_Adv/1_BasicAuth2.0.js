
//**********BASIC AUTHENTICATION 2.0************

//When we login with anything they generate the authentication token and with helpof that tocken we heat next api this is called basic auth 2.0

//PROBLEM 1 => Website => https://gorest.co.in/access-token#

//NOTE: Before checking any api in automation u should check it in POSTMAN

//SCENARIO:
//We have to CREATE user
//We have to Access user
//We have to UPDATE user
//We have to DELETE user

//******We save athorilization tocken in Header only*****

describe('Validate the complete scenario', () => {
    it('Validate the complete scenario from [Create,retrive,Update,Delete] the user', () => {

        let accessToken = "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
        let payload = {
            name: 'Rudra Guha III',
            email: generateEmail(),
            gender: 'female',
            status: 'inactive'
        }
        //As when we creat the email duplicate is not allow so we declared one function to create random email

        function generateEmail() {
            let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let string = '';
            for (let i = 0; i < 9; i++) {
                string += char[Math.floor(Math.random() * char.length)];
            }
            return (string + '@gmail.com');
        }
        cy.request({
            //Create User
            method: "POST",
            url: "https://gorest.co.in/public/v1/users",
            headers: {
                Authorization: accessToken
            },
            body: payload

        }).then((responce) => {
            //Accertion
            //cy.log(responce)
            expect(responce.status).to.eql(201)
            return responce.body.data.id
        }).then((userId) => {
            //Retrive the data =>pass the id to next user to filter the user
            cy.request({
                method: "GET",
                url: `https://gorest.co.in/public/v1/users/${userId}`,
                headers: {
                    Authorization: accessToken
                }
            }).then((responce) => {
                //Assertion
                //cy.log(responce)
                expect(responce.status).to.eql(200)
                return responce.body.data.id
            }).then((id) => {
                cy.request({
                    method: "PUT",
                    url: `https://gorest.co.in/public/v1/users/${id}`,
                    body: payload,
                    headers: {
                        Authorization: accessToken
                    }
                }).then((response) => {
                    response.body.data.name="Mayuri"
                    cy.log(response)
                    expect(response.status).to.eql(200)
                })
            })
        })
    })
})