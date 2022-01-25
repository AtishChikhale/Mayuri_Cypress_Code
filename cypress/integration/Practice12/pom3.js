
import { Login } from "./pages/page1";

import { DashBoard } from "./pages/page2";

let url = new Login()
let dash = new DashBoard()

describe('Orange Hrm functionality', () => {
    it('functionality', () => {
        url.NavigateURL()
        url.login('Admin', 'admin123')
        url.nextpage()
        dash.quickLaunch('Timesheet')
    })
})