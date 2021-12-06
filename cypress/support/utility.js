
export class Utility {
    CalculateAge(tableid, expectValue) {
        let sum = 0
        cy.get(`#${tableid}`).find('tr').each((el, index, list) => {
            let age = el.children('td').last().text()
            cy.log(age)
            sum = sum + Number(age)
            cy.log(sum)
        }).then(()=>{
            expect(sum).to.eql(expectValue)
        })
    }
}

