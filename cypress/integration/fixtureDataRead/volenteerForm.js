
describe('Verify the form data', () => {


    beforeEach(() => {
        cy.visit("http://testautomationpractice.blogspot.com/")
        cy.fixture('automationData').then(function (data) {
            this.data = data
        })

    })
    it('Validate the Volunteer Sign Up', function () {
        cy.get('#frame-one1434677811').then(($jqEle) => {
            let ele = $jqEle.contents().find('body')
            //cy.log(ele)
            cy.wrap(ele).as('bodyEle')
            cy.get('@bodyEle').find('#RESULT_TextField-1').type(this.data.firstName)
            cy.get('@bodyEle').find('#RESULT_TextField-2').type(this.data.lastName)
            cy.get('@bodyEle').find('#RESULT_TextField-3').type(this.data.moNumber)
            cy.get('@bodyEle').find('#RESULT_TextField-4').type(this.data.country)
            cy.get('@bodyEle').find('#RESULT_TextField-5').type(this.data.city)
            cy.get('@bodyEle').find('#RESULT_TextField-6').type(this.data.email_Address)
            cy.get('@bodyEle').find('.inline_grid.choices').eq(0).find('td').find('input[value="Radio-0"]').click({ force: true })//.should('have.text',this.data.gender[0])
            cy.get('@bodyEle').find('.inline_grid.choices').eq(0).find('td>label').eq(0).should('have.text', this.data.gender[0])
        })
    })
})