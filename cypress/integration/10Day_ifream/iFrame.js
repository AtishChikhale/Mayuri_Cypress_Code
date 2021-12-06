
//If there is page inside page then if we try to find out element which is inside page of original page we get the error such as "elemnt is not found"

//In order to elliminate that isssue we are using ifream in our code

//there are 3 ways of write code for element inside element in cypress

// describe("Verify the functionality of iFrame",()=>{

// //1ST APPROCH
//     it("Find Iframe HTML elements sUsing JQuiry'",()=>{
//         cy.visit("http://www.webdriveruniversity.com/IFrame/index.html")
//         //cy.contains("Home")  //Expected to find content: 'Home' but never did.

//         //To overcome that error we are using 2 approch
//         //1 . Find Iframe HTML elements Using JQuiry'
//        //When we are using $ it means it jquiry

//        //contents() method(JQ)=>The .contents() method can also be used to get the content document of an iframe, if the iframe is on the same domain as the main page.
//        //find() method(JQ) =>The find() method returns descendant elements of the selected element. A descendant is a child, grandchild, great-grandchild, and so on.

//        cy.get('#frame').then(($Iframe)=>{
//            cy.log($Iframe)  //ifream  $Iframe.contents() give me document
//            let body=$Iframe.contents().find('body')
//            cy.log(body) //this command give me jquiry element so i can apply cypress method on that so need to wrap it in cypress
//            cy.wrap(body).as('elementBody')
//            cy.get('@elementBody').contains('Home')
//        })
//     })

// //2ND APPROCH 
//      //1 . Find Iframe HTML elements Using Javascript'

//     it.only("Find Ifreame HTML element using JavaScript",()=>{
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then((el)=>{
//         let body=el['0'].contentDocument.body
//         cy.wrap(body).as('elementBody')
//         cy.get('@elementBody').contains('Home')
//         })
//     })

// })


//========================================================================================================

//it the HTML elemnt is in page inside page then it know as iframe 
//2 approch =>1 By using jquiry 2. By using javascript

// describe('Find HTML element', () => {
//     beforeEach(() => {
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//     })
//     it('find HTML element by using jQ', () => {
//         cy.get('#frame').then(($jQ) => {
//             let body = $jQ.contents().find('body')
//             cy.wrap(body).as('jQelement')
//             cy.get('@jQelement').find('.sub-heading').should('have.contain', 'Who Are We?')
//         })

//     })

//     it('find html element by using js', () => {
//         cy.get('#frame').then((js) => {
//             let body = js[0].contentDocument.body
//             cy.wrap(body).as('jSelement')
//             cy.get('@jSelement').find('.sub-heading').should('have.contain', "Who Are We?")

//         })
//     })
// })

//======================================================================================================

describe('Iframe RahuShetty Practice',()=>{

    beforeEach(()=>{
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')
    })

    it('find html ele by using JQ method',()=>{
        //cy.get('new-navbar-highlighter')
        cy.get('#courses-iframe').then(($jqele)=>{
            let ele=$jqele.contents().find('body')
            cy.wrap(ele).as('jqelement')
            cy.get('@jqelement').find('.text').should('have.contain','Make a big leap in your Automation project with support from our expert team of test architect and engineers.')

        })
           
        })

        it.only('find html element by using javascript',()=>{
            cy.get('#courses-iframe').then((ele)=>{
                let body=ele[0].contentDocument.body
                cy.wrap(body).as('jsele')
                cy.get('@jsele').find('.text').should('have.contain','Make a big leap in your Automation project with support from our expert team of test architect and engineers.')
            })
        })

    })
