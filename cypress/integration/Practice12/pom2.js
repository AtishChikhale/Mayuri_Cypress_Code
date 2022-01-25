
import { OrangeHRM } from "../Practice12/pages/pages2"

let obj = new OrangeHRM()
describe('Verify Orange HRM login', () => {
    
    it('Verify the login functionality', () => {
        obj.Url()

        obj.emailID('mayuri@katwe')
        

    })
})