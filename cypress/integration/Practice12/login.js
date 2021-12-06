//Orange HRM basic login program

// describe('Verify the login functionality', () => {
//     it('Verify the login functionality with valid credentials', () => {
//         cy.visit('https://opensource-demo.orangehrmlive.com/')
//         cy.get('#txtUsername').type('Admin')
//         cy.get('#txtPassword').type('admin123')
//         cy.get('#btnLogin').click()
//         cy.get('#menu_dashboard_index').should('be.visible')
//     })

//     it('Verify the login functionality with invalid credentials',()=>{
//         cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
//         cy.get('#txtUsername').type('Admin')
//         cy.get('#txtPassword').type('asdfasdf12')
//         cy.get('#btnLogin').click()
//         cy.contains('Invalid credentials').should('be.visible')
//     })
//})

//=============================================================================================

context('Verify flipcard mobile below 1000 rs', () => {
    it('Verify the mobile in flipkart', () => {
        let arr = []
        cy.visit('https://www.flipkart.com/search?q=realme%20mobile%20under%2010000&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.get('._3704LK').clear()
        cy.get('._3704LK').type('Mobile').type('{ENTER}')
        cy.get('._2YxCDZ').last().select('₹10000')
        cy.wait(2000)
        cy.get('._30jeq3._1_WHN1').each((el) => {
            let price = el.text().slice(1).split(',').join("")
            arr.push(Number(price))
        }).then((arr)=>{
            console.log(arr.length)
        })
      
    })
})
