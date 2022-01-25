describe('verify the delete method',()=>{
    it('verify the deleet method',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2"
        }).then((responce)=>{
            expect(responce.status).to.eql(204)
            
        })
    })
})