import { Utility } from "../../support/utility"

describe('Verify the table element ', () => {

    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    })

    //Problem1 =>add the sr number of table
    it('verify the table element addition ', () => {
        //cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('th[scope="row"]').each((el) => {
            //let sum=0
            sum = sum + Number(el.text())
        }).then(() => {
            expect(sum).to.eql(6)
        })
    })


    it('Veriy the addition of elemnt and skip the 1st element ', () => {
        let sum = 0
        cy.get('th[scope="row"]').each((el, index, list) => {
            if (index != 0) {
                sum = sum + Number(el.text())
            }
        }).then(() => {
            expect(sum).to.eql(5)
        })

    })



    //Problem2 =>add the age of table 

    it('Verify sum of age in table row vise', () => {
        let sum = 0
        cy.get('#t01').find('tr').each((el) => {
            let num = el.children('td').eq(2).text()
            sum = sum + Number(num)
        }).then(() => {
            expect(sum).to.eql(159)
        })
    })

    it('Verify sum of age in table row vise', () => {
        let sum = 0
        cy.get('#t02').find('tr').each((el) => {
            let num = el.children('td').eq(2).text()
            sum = sum + Number(num)
        }).then(() => {
            expect(sum).to.eql(163)
        })
    })



    //2 nd WAY===>>>>>> By using custom commad which added in support folder command.js file
    it('Custom Command',()=>{
        cy.AgeCalculate('t01',159)
        cy.AgeCalculate('t02',163)
    })



    //3 re WAY=====>>>>>>>> by using Utility class
 
    it.only('Utility class',()=>{
        let ageSum=new Utility()
        ageSum.CalculateAge('t01',159)
    })

})

