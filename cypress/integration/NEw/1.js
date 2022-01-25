// describe('Verify the site', () => {
//     it('Verify heading equal to number of elemnt present', () => {
//         cy.visit('https://way2automation.com/demo.html')
//         cy.get('.heading').each((el, index) => {
//             if (index > 0) {
//                 let parentEle = el.text()
//                 cy.log(parentEle)
//                 cy.get('.heading').next('ul').find('li').each((el) => {
//                     let aa = el.text()
//                     cy.log(aa)

//                 })

//                 })
//             })
//     })

//====================================================================================

// describe('verify the component', () => {
//     it('verify the ele', () => {
//         cy.visit('https://way2automation.com/demo.html')
//         cy.get('.linkbox.margin-bottom-20').children().each((el, index) => {

//             if (index % 2 == 0) {
//                 let text = el.text()
//                 cy.log(text)

//             }
//             else if (index % 2 != 0) {
//                 let count = el[0].childElementCount
//                 cy.log(count)

//             }

//         })

//     })
// })

//=============================================================================================

describe('verify the component', () => {
    it('Verify the ele', () => {
        var a = []
        cy.visit('https://way2automation.com/demo.html')
        cy.get('div #toggleNav').find('ui>li').find('a').each((el, index) => {
            //cy.get('#toggleNav').children('li').each((el, index) => {
                //if(cy.wrap(el).not('.dropdown')){
                    cy.log(el.text())
                    a.push(el.text())
                    let aaa = a.sort()
                    cy.log(aaa)   
                
            // cy.log(el.text())
            // a.push(el.text())
            // let aaa = a.sort()
            // cy.log(aaa)
        })


    })
})




































































