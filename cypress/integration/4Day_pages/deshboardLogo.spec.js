import { DashboardLogo } from "../../pages/Dashboardlogo";
import { loginOrangeHRM } from "../../pages/Login";

let login = new loginOrangeHRM()
let dashLogo = new DashboardLogo()

beforeEach(() => {
    login.navigation()
    login.loginCredential("Admin", "admin123")
})

describe('DashBoard Logo', () => {
    it('Validate dashboard logo', () => {
        dashLogo.dashboardlogo()
    })

    it.only('Whole Dashborad Element', () => {
        dashLogo.dashboardName() //dashboard need to show
        dashLogo.quickLaunch() //quick launch with 6 element need to show
        dashLogo.dashBoardTable2()
    })
})