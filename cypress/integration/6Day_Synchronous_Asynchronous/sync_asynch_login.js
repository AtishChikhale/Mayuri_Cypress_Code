//In cypress commands are executed "ASYNCHRONOUSLY"
//In cypress code execution done "SYNCHRONOUSLY" =>problem is that when we include javascript code in cypress code sunchronous execution flow gets break and js code executed first
//To avoid that we used .then and inside that we write js code so command after .then executed after cypress code

describe('Validate the login functionality', () => {
    it('Validate with valid credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[id="txtUsername"]').type("Admin")
        cy.get('input[id="txtPassword"]').type("admin123")
        cy.get('input[id="btnLogin"]').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
        console.log("hello")
    })

    // it('Validate with invalid credentials', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')
    //     cy.get('input[id="txtUsername"]').type("new")
    //     cy.get('input[id="txtPassword"]').type("new123")
    //     cy.get('input[id="btnLogin"]').click()
    //     cy.get('span[id="spanMessage"]').should('be.visible')
    //     .then(()=>{
    //       console.log("hello123")
    //     })

    //})
})