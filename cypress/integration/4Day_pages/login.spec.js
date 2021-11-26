import { loginOrangeHRM } from '../../pages/Login'

let login = new loginOrangeHRM ()

describe('Login Functionality', () => {

    beforeEach(() => {
        login.navigation()
    })
    
    it('Login with valid credentials', () => {
        login.loginCredential('Admin', 'admin123')
        login.validateLogo()
    })

    it('Login with invalid credentials', () => {
        login.loginCredential('mayu', 'mayu123')
        login.validaterrorMsg()
    })
})