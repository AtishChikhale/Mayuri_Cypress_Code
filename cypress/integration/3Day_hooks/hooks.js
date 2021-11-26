
//beforEach =>This block run before every testcase
//afterEach =>This block run after every testcase

//before =>This block run before everything
//after =>this block of code run after everything

//===============================================================================

describe('Verify the functionality of the hook in cypress', function () {

    before(function () {
        cy.log("Before Everything")  //DB connection
    })

    after(function () {
        cy.log("After Everything")  //closed DB connection
    })

    beforeEach(function () {
        cy.log('This block of code run before each testcase') // common url or functionality before every testCase
    })

    afterEach(function () {
        cy.log('This block of code run after each testcase') // clearing session storage , cookies and storage
    })

    it("Test case one", () => {
        cy.log('TestCase One')
    })

    it("Test case two", () => {
        cy.log("TestCase Two")
    })
})

