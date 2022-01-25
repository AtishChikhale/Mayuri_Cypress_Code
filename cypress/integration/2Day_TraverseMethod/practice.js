

// describe("traverse method on flipkart", () => {
//     it('search block', () => {
//         cy.visit('https://www.flipkart.com/')
//         cy.get('._3704LK').type('mobile under 10000')
//         cy.get('.L0Z3Pu').click()
//         cy.get('._10UF8M._3LsR0e').should('be.visible')
//     })

//     it('children for ui', () => {
//         cy.visit('https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_2_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_2_0_na_na_na&as-pos=2&as-type=TRENDING&suggestionId=mobiles&requestId=12f3ce46-f5b4-42f4-b1ce-fbea8ab073a2')
//         cy.get('._1xgFaf')
//             .children('li')
//             .should('have.contain', 'Multiple Hands-free')
//     })

//     it('eq()method', () => {
//         cy.visit('https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_2_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_2_0_na_na_na&as-pos=2&as-type=TRENDING&suggestionId=mobiles&requestId=12f3ce46-f5b4-42f4-b1ce-fbea8ab073a2')
//         cy.get("._1xgFaf")
//             .children('li')
//             .eq(1)
//             .should('have.attr', "class", 'rgWa7D')
//     })

//     it('first() method', () => {
//         cy.visit('https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_2_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_2_0_na_na_na&as-pos=2&as-type=TRENDING&suggestionId=mobiles&requestId=12f3ce46-f5b4-42f4-b1ce-fbea8ab073a2')
//         cy.get('._1xgFaf >li')
//             .first()
//             .should('have.contain', '6 GB RAM | 64 GB ROM | Expandable Upto 512 GB')
//     })

//     it('last() method', () => {
//         cy.visit('https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_TrendingAutoSuggest_2_0_na_na_na&otracker1=AS_Query_TrendingAutoSuggest_2_0_na_na_na&as-pos=2&as-type=TRENDING&suggestionId=mobiles&requestId=12f3ce46-f5b4-42f4-b1ce-fbea8ab073a2')
//         cy.get('._1xgFaf >li')
//             .last()
//             .should('have.contain', "1 Year Warranty for Mobile and 6 Months for Accessories")
//         cy.get('._1xgFaf ').children('li').should('have.length', 148)

//     })

//     it.only('closest', () => {
// cy.visit()
//     })

// })

describe("Mobile on filpkart", () => {
    it('Mobile above 10000', () => {
        cy.visit('https://www.flipkart.com/')
        cy.get('input[autocomplete="off"]').type("Mobile")
        cy.get('.L0Z3Pu').click()
        cy.get('_2YxCDZ').children("option").eq(3).should('have.text', '₹10000')
    })
})