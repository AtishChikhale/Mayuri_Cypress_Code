
//1 day=>at requres api site

// describe('Verify the different types of API', () => {
//     it('Verify the GET API request', () => {

//         cy.request({
//             method: "GET",
//             url: "https://reqres.in/api/users?page=2"
//         }).then(function (response) {
//             //cy.log(response) //its a good practice always print the response not blindly validate

//             //1st way directly
//             expect(response.status).to.eql(200)
//             expect(response.body.data[0].first_name).to.eql('Michael')

//             //Real time scenario
//             return response.body.data.find(function (el) {
//                 return el.first_name == "Michael" //return all object which contain firstName is "michel"
//             })
//         }).then(function (val) {
//             expect(val.first_name).to.eql('Michael')
//         })

//     })
// })


//********************************************************************************************* */

describe('Verify the all api', () => {
    it('Verify the GET Api', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((res) => {
            expect(res.status).to.eql(200)
            return res.body.data.find((el) => el.first_name == "Michael")
        }).then((el) => {
            expect(el.first_name).to.eql('Michael')
        })
    })
})