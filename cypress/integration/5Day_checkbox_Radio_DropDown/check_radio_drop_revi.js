
describe.skip('varify orangHRM website with dropdown and checkbox', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/directory/viewDirectory/reset/1')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()

    })
    it('verify dropdown', () => {
        cy.get('.current.main-menu-first-level-list-item').click()
        cy.get('#searchDirectory_job_title').select('2').should('have.contain', 'Chief Financial Officer')
        cy.get('#searchDirectory_location').select('3,-1').should('have.contain', 'Canada')

    })

    it('verify checkBox', () => {
        cy.get('.current.main-menu-first-level-list-item').siblings().eq(4).click()
        cy.get('input[type="checkbox"]').check('2_2').should('be.checked')
        cy.get('input[type="checkbox"]').check(['12_6', '11_6', '17_7']).should('be.checked')

    })
})

describe('verify radio button on webdriveruniversity website', () => {
    it('verify radio button', () => {
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').check('lettuce')
        cy.get('input[type="radio"]').eq(5).should('be.checked')
        cy.get('input[type="radio"]').check('pumpkin')
        cy.get('input[type="radio"]').eq(5).should('not.be.checked')

    })
})