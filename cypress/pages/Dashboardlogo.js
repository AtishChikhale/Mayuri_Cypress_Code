export class DashboardLogo {

    dashboardlogo() {
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    }

    dashboardName() {
        cy.contains('Dashboard').should('have.text', "Dashboard")
    }

    quickLaunch() {
        cy.get('.quickLaungeContainer').find('tr').children().should('have.length', 6)
    }

    dashBoardTable2() {
        cy.get('#panel_wrapper_1').children().should('have.length', 3)
    }
}