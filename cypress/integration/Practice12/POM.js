import {Login} from "../Practice12/pages/page1"

let app=new Login()

describe('Verify orange HRM Login functionality ',()=>{

    beforeEach('Common',()=>{
        app.NavigateURL()
    })

    it('Validate the login functionality with valid credentials',()=>{
        app.login('Admin','admin123')
        app.nextpage()
    })

    it('Validate the login functionality with invalid credentials',()=>{
        app.login('Adminaa','admin123889')
        app.errorMessage('Invalid credentials')
       
    })

})



