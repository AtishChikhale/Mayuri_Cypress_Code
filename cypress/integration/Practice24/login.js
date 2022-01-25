
// describe('Verify the login functionality', () => {
//     it('Verify the contact page form', () => {
//         let data = ["Mayuri", "Katwe", "Mayuri@gmail.com", "OK"]
//         cy.visit('https://webdriveruniversity.com/')
//         cy.get('#contact-us').invoke('removeAttr', 'target').click()
//         cy.url().should('includes', 'contactus.html')
//         cy.get('#contact_form >.feedback-input').each((el, index) => {
//             cy.wrap(el).type(data[index])
//         })
//         cy.get('input[type="submit"]').click()
//         cy.wait(3000)
//         cy.get('#contact_reply').children('h1').should('have.contain', 'Thank You for your Message!')
//     })

//     //Dropdown
//     it('Verify the dropdown', () => {
//         let data = ['C#', 'JUnit', 'JQuery', 'Pear']
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         //cy.get('#dropdowm-menu-1').select('Python').should('have.contain','Python')
//         cy.get('.dropdown-menu-lists').each((el, index) => {
//             cy.wrap(el).select(data[index]).should('have.contain', data[index])
//         })
//     })

//     //checkbox
//     it('Verify the checkboxes', () => {
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('#checkboxes').find('input[type="checkbox"]').eq(0).check('option-1').should('be.checked')
//         cy.get('#checkboxes').find('input[type="checkbox"]').eq(2).check('option-3').should('be.checked')
//         cy.get('#checkboxes').find('input[type="checkbox"]').eq(2).uncheck('option-3').should('not.be.checked')
//     })

//     //radioButton
//     it('Verify the radio button', () => {
//         cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
//         cy.get('#radio-buttons').find('input[type="radio"]').first().check('green').should('be.checked')
//         cy.get('#radio-buttons').find('input[type="radio"]').eq(1).check('blue').should('be.checked')
//         cy.get('#radio-buttons').find('input[type="radio"]').first().should('not.be.checked')
//     })


//     //Dynamic dropdown
//     it('Verify the dynamic dropdown', () => {
//         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
//         cy.get('#autocomplete').type('ind')
//         cy.get('#ui-id-1').children('li').each((el) => {
//             cy.log(el)
//             if (el.text() == "India") {
//                 cy.wrap(el).click()
//             }
//         }).then(() => {
//             cy.get('#autocomplete').should('have.value', 'India')
//         })

//     })

//     //Calender
//     it.only('Verify the calender on webdriveruniversity', () => {

//         let date = new Date()
//         // let day = date.getDate()
//         // cy.log(day)
//         let nDay = date.setDate(date.getDate() + 435)
//         cy.log(nDay)
//         let month = date.getMonth()
//         cy.log(month)
//         let month1 = date.toLocaleDateString('default', { month: "short" })
//         cy.log(month1)
//         let year = date.getFullYear()
//         cy.log(year)

//         cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
//         cy.get('.input-group-addon').click()

//         function getYearandMonth() {
//             cy.get('.datepicker-switch').first().then((el) => {
//                 if (!el.text().includes(year)) {
//                     cy.get('.next').first().click()
//                     getYearandMonth()
//                 }
//             }).then(() => {
//                 cy.get('.datepicker-switch').first().then((el) => {
//                     if (!el.text().includes(month)) {
//                         cy.get('.next').first().click()
//                     }
//                 })
//             })
//         }
//         getYearandMonth()

//         function calldate() {
//             cy.get('.table-condensed').eq(0).children().find('.day').each((el) => {
//                 cy.log(el.text())
//                 if (el.text().includes(nDay)) {
//                     cy.log(el)
//                     cy.wrap(el).click()
//                 }
//             })
//             //cy.get('.table-condensed').eq(0).children().find('.day').contains(nDay).click()
//         }
//         calldate()
//         //getYearandMonth()
//     })
// })

//=========================================================================================================================
//IFRAME

// describe('Verify the iFreame', () => {
//     //for ifreme there are two method //1. jquery contents method and 2. js contentsdocument method

//     it('Verify ifreme by using contents method', () => {
//         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then(($el) => {
//             let element = $el.contents().find('body')
//             cy.wrap(element).as('body')
//             cy.get('@body').find('#button-find-out-more').should('be.visible')
//             cy.get('@body').contains('Who Are We?').should('have.attr', 'class', 'sub-heading')
//         })
//     })

//     it.only('verify the ifreme by using javascript method', () => {
//         cy.visit('https://webdriveruniversity.com/IFrame/index.html')
//         cy.get('#frame').then((el)=>{
//             cy.log(el)
//             let ele=el['0'].contentDocument.body
//             cy.wrap(ele).as('body')
//             cy.get('@body').contains('Home')
//             cy.get('@body').find('div[class="section-title"]').last().children().should('have.text','Excellent Customer Service!')

//         })

//     })
// })

//=========================================================================================================================

//Tables

// describe('Table in cypress', () => {
//     it('Verify the table in cypress', () => {
//         let sum = 0
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('#t01').find('tr').each((el) => {
//             let text = el.children('td').last().text()
//             sum = sum + Number(text)
//         }).then(() => {
//             cy.log(sum)
//             expect(sum).to.eql(159)
//         })
//         //cy.log(sum)
//     })


//     it.only('Verify the second table', () => {
//         let sum = 0
//         cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
//         cy.get('#t02').find('tr').each((el) => {
//             let text = el.children('td').last().text()
//             sum = sum + Number(text)
//             cy.log(text)
//         }).then(() => {
//             expect(sum).to.eql(163)
//         })
//     })
// })

//========================================================================================================================

//FileUploading Functionality
// describe('Verify the file upload functionality',()=>{
//     let fileUpload='dummy1.png'
//     it('Verify the file upload functionality',()=>{
//         cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
//         cy.get('#myFile').attachFile(fileUpload)
//         cy.get('#submit-button').click()
//         cy.on('window:alert',(str)=>{
//             expect(str).to.eql('Your file has now been uploaded!')
//         })
//         cy.url().should('include',fileUpload)
//     })

//     it('Verify the negetive assertion for file upload functionality',()=>{
//         cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
//         cy.get('#submit-button').click()
//         cy.on('window:alert',(str)=>{
//             expect(str).to.eql('You need to select a file to upload!')
//         }
//         )
//     })

//     it('Verify multiple file upload functionality',()=>{
//         cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
//         cy.get('#igUpload1_ibb_fp').attachFile(fileUpload)
//         cy.get('#igUpload1_fc').children().should('have.length',1)
//     })

//     it.only('Verify multiple file upload functionality',()=>{
//         let files=['env.png','dummy1.png']
//         cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
//         cy.get('#igUpload1_ibb_fp').attachFile(files)
//         cy.get('#igUpload1_fc').children().should('have.length',files.length)
//     })
// })

// describe('Verify the file upload functionality',()=>{
//     it('Verify the file uploda functionality',()=>{
//         cy.visit('https://webdriveruniversity.com/File-Upload/index.html')
//         cy.get('#myFile').attachFile('dummy1.png')
//         cy.get('#submit-button').click()
//         cy.on('window:alert',(str)=>{
//             expect(str).to.eql('Your file has now been uploaded!')
//         })
//         cy.url().should('include','dummy1.png')
//     })
// })

//========================================================================================================

//JAVASCRIPT ALERT

// describe('Verify the normal alert', () => {
//     it('verify the alert', () => {
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button1').click()
//         cy.on('window:alert', (str) => {
//             expect(str).to.eql('I am an alert box!')
//         })
//     })

//     it.only('verify the confirm popup',()=>{
//         cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
//         cy.get('#button4').click()
//         cy.on('window:confirm',(str)=>{
//             expect(str).to.eql('Press a button!')
//             return true
//         })
//         cy.get('#confirm-alert-text').should('have.text','You pressed OK!')
//     })

// })


//=============================================================================================================
//ALERT BY USING STUB

describe('Verify the popup bu using stub ,1. PROMPT', () => {
    it.skip('Verify the prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj) => {
            cy.stub(obj, 'prompt').returns('Hello')
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text', 'You entered: Hello')
        })
    })

    it('verify the confirm popup', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj) => {
            cy.stub(obj, 'confirm').returns(true)
            cy.get('button[onclick="jsConfirm()"]').click()
            cy.get('#result').should('have.contain', 'You clicked: Ok')
        })
    })

    it('verify the confirm with negetive assertion', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj) => {
            cy.stub(obj, 'confirm').returns(false)
            cy.get('button[onclick="jsConfirm()"]').click()
            cy.get('#result').should('have.text', 'You clicked: Cancel')
        })
    })

    it('verify the prompt with writing nothing', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((obj) => {
            cy.stub(obj, 'prompt').callsFake(() => null)
            cy.get('button[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text', 'You entered: null')
        })
    })
})





