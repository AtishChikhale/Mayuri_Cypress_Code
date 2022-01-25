
describe('Verify the go rest api', () => {


    it('Verify the gorest API', () => {

        let accessToken = "Bearer a2a099b15a66d1a9efc71ae1c63cda2bf5bcb4f6059fb16419946eb115f06f50"
       
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v1/users",
            Authorization:accessToken,
            
        })

       
    })
})
