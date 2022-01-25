
export class DashBoard {
    quickLaunch(variable) {
        cy.get('.quickLinkText',{timeout:2000}).each((el) => {
            let text = el.text()
            if (text == `${variable}s`) {
                cy.wrap(el).parent().click()
            }
        })

        cy.url().should('includes', variable)
    }
}