
// describe('Validate the score from scorecard', () => {
//     it('Scorecard score', () => {
//         cy.visit('https://www.espncricinfo.com/series/the-ford-trophy-2021-22-1279953/wellington-vs-otago-2nd-match-1279959/full-scorecard')
// let sum=0
//         cy.get('div.match-scorecard-page').find('.table.batsman').eq(0).find('tbody').find('td').filter('.font-weight-bold').each((el,index)=>{
//             //if(index>=2){
//                 let run=el.text()
//                 cy.log(Number(run))

//             sum=sum+Number(run)
//             //}
//         }).then(()=>{
//             cy.get('.thead-light.bg-light.total').eq(0).find('.text-right.font-weight-bold').should('have.length',1)

//             //expect(sum).to.eql('@total')
//         })

//     })
// })



describe("crickinfo", () => {
    it("crickinfo", () => {
        let startrun = 0
        let extra = 0
        let total = 0
        //let reg = /\W/

        cy.visit('https://www.espncricinfo.com/series/the-ford-trophy-2021-22-1279953/wellington-vs-otago-2nd-match-1279959/full-scorecard')
        cy.get('.table.batsman').eq(1).find('td[class="font-weight-bold"]').each((el) => {
            let run = Number(el.text())
            startrun = startrun + run
            cy.log(startrun)
        })

        cy.get('tr[class="extras"]').eq(1).find('td[class="text-right font-weight-bold"]').then((el) => {
            extra = Number(el.text())
            cy.log(extra)
            cy.log(extra)
        })

        cy.get('tr[class="thead-light bg-light total"]').eq(1).find('td[class="text-right font-weight-bold"]').then((el) => {
            total = Number(el.text().split('/')[0])
            cy.log(total)

        }).then((el) => {
            cy.log(el)
            expect(startrun + extra).to.eqls(total)
        })

    })
})



