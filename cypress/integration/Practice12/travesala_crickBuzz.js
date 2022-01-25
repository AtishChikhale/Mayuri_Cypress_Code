
describe('Traversing DOM method in Cypress', () => {


    //1. Children() =>give the children of given dom element
    it('Verify the children() method', () => {
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-ftr-cntnr').children().should('have.length', 5)
    })

    //2. Eq() method =>give the perticular element from dom list
    it('Verify the eq() method', () => {
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-ftr-ul').eq(2).should('have.attr', 'class', "cb-ftr-ul")
    })

    //3. First()method give the first element from list of dom
    it('Verify first() method', () => {
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-ftr-ul').eq(1).children().first().children('a').should('have.attr', 'class', 'text-white')
    })

    //4. last method()=>give the last dom element in list
    it('Verify the last() method', () => {
        cy.visit('https://www.cricbuzz.com/')
        cy.get('ul.cb-ftr-ul').eq(2).children().last().children().should('have.contain', 'Cricbuzz TV Ads')
    })

    //5. Find method=>to find perticular elemnt from set of object
    it('Verify the find() method', () => {
        cy.visit('https://www.cricbuzz.com/cricket-match/live-scores')
        cy.get('.cb-scg-drp-dwn-ul').find('div').should('have.contain', 'INTERNATIONAL')
    })

    //6. Filter() method =>to find specific element
    it('Verify the filter() method', () => {
        cy.visit('https://www.cricbuzz.com/cricket-match/live-scores')
        cy.get('.cb-lst-mtch.cb-lst-dom').find('div').filter('.cb-scg-srs-nm').should('have.contain', 'Pakistan v West Indies, 2021')
    })

    //7. sibling()=>give the all sibling of gievn element
    it('Verify the sibling() method', () => {
        cy.visit('https://www.cricbuzz.com/cricket-match/live-scores')
        cy.get('.cb-lst-mtch.cb-lst-dom').siblings().should('have.length', 36)
    })

    //8. next()=>give the next sibling element
    it('Verify the next() method', () => {
        cy.visit('https://www.cricbuzz.com/cricket-match/live-scores')
        cy.get('#mpu').next().should('have.contain', 'Featured Videos')
    })

    //9. nextAll()=>give the all next all element
    it('Verify the nextAll() method', () => {
        cy.visit('https://www.cricbuzz.com/cricket-match/live-scores')
        cy.get('a[title="Live Score"]').eq(0).nextAll().should('have.length', 3)
    })

    //10. nextUntil() =>this method give sibling between the two sibling
    it('Verify the nextUntil() method', () => {
        cy.visit('https://www.cricbuzz.com/')
        cy.get('#live-scores-link').nextUntil('nav a[title="Melbourne Stars v Sydney Sixers, 13th Match - Preview"]').should('have.length', 4)
    })

    //11. prev() =>this method give previous sibling
    it('Verify Prev sibling',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.contains('MLS vs SYS - Preview').prev().should('have.attr','title','Hobart Hurricanes v Perth Scorchers, 12th Match - PRS Won')
    })

    //12. prevAll() =>this method give previous sibling
    it('Verify PrevAll sibling',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.contains('MLS vs SYS - Preview').prevAll('a').should('have.length',5)
    })

    //13 PrevUntill =>this methid give element present bewtween two
    it('Verify PrevUntill ',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.contains('MLS vs SYS - Preview').prevUntil('#live-scores-link').should('have.length',4)
    })

    //14.closest()=>give closest ancester
    it('Verify closest() ',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.get('#live-scores-link').closest('nav').should('have.attr','class','cb-mat-mnu')
    })

    //15. parents() =>give all parent
    it('Verify parents() method',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.get('#live-scores-link').parents('div').should('have.attr','class','cb-col cb-col-100 mrgn-btm-5')
    })

     //16. parent() =>give immediate parent
     it('Verify parents() method',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.get('#live-scores-link').parent().should('have.attr','class','cb-mat-mnu')
    })

    //17. parentUntill() =>give immediate parent
    it.only('Verify parentUntil() method',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.get('#live-scores-link').parentsUntil('#page-wrapper').should('have.length',3)
    })

    //18.not() =>to remove the any elemnt
    it('Verify parentUntil() method',()=>{
        cy.visit('https://www.cricbuzz.com/')
        cy.get('.cb-mat-mnu').children().not('#live-scores-link').should('have.length',4)
    })

})