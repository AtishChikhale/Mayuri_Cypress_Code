// describe('find table having value python and its price', () => {
//     it('find table having value python and its price', () => {
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#product>tbody>tr>td:nth-child(2)').each((el, index, list) => {
//             var text1 = el.text()
//             if (text1.includes('JMETER')) {
//                 cy.get('#product>tbody>tr>td:nth-child(2)').eq(index).next().then((prise) => {
//                     let prisetext = prise.text()
//                     expect(prisetext).to.equal('25')
//                 })
//             }

//         })
//     })
// })


describe('table', () => {
    it('table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('tr>td:nth-child(2)').each((e,index)=>{
            let text1=e.text()
            if(text1.includes('JMETER')){
                cy.get('tr>td:nth-child(2)').eq(index).next().then((prise)=>{
                    let pprise=prise.text()
                    expect(pprise).to.equal('25')
                })
            }
        })
    })
})
