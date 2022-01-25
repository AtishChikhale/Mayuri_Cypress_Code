//Payload data store in fixture

describe('Verify the goRestURL', () => {

    function generateEmail() {
        let chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let string = '';
        for (var ii = 0; ii < 15; ii++) {
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return string + '@gmail.com';
    }

    it('Verify the post request url', function () {
        cy.fixture('goRestPayLoad').then(function (payLoad) {
            cy.log(payLoad)
            payLoad.email = generateEmail()
            cy.apiRequest('POST', 'https://gorest.co.in/public/v1/users', payLoad).then(function (resp) {
                //cy.log(resp)
                return resp.body.data
            }).then(function (obj) {
                cy.apiRequest('GET', `https://gorest.co.in/public/v1/users/${obj.id}`, payLoad).then(function (re) {
                    cy.log(re)
                    expect(re.body.data.email).to.eql(payLoad.email)
                    expect(re.body.data.name).to.eql(payLoad.name)
                })

            })
        })

    })
})