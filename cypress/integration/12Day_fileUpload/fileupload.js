//For file uploading we need to installed one pluging from https://www.npmjs.com/package/cypress-file-upload
//then run command as => npm install --save-dev cypress-file-upload
//in cypress/support/commands.js add commad as =>import 'cypress-file-upload';
//For file uploading u need to store one file in feature folder

//Note: Whenever u need to find file upload element take element with input tagname

describe('Verify file uploading functionality', () => {

    // Simply Upload the single file 
    it('File upload functionality', () => {
        cy.visit('http://automationpractice.com/index.php?controller=contact')
        let fixtureFile = 'env.png'
        cy.get('#fileUpload').attachFile(fixtureFile) //attachfile is the method which came from pluging
        cy.get('.filename').should('have.text', fixtureFile)

    })

    // Upload the file where confirmation popup came upter uploading
    //Positive Assertion 
    it('File uploade with confirmation popup', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html?filename=')
        let fileUpload = 'Agile - Agile.pdf'
        cy.get('#myFile').attachFile(fileUpload)
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql('Your file has now been uploaded!')
        })
        cy.url().should('include', 'Agile+-+Agile.pdf')
    })
    //Negative Assertion
    it('File upload with confirmation popup', () => {
        cy.visit('http://www.webdriveruniversity.com/File-Upload/index.html?filename=')
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql('You need to select a file to upload!')
        })

    })

    //upload the multiple files
    it('Upload the mutilple files and validate it', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        let multipleFile = ['env.png', 'Agile - Agile.pdf']
        cy.get('#igUpload1_ibb_fp').attachFile(multipleFile)
        //cy.get('#igUpload1_spbtncncl_lbl').click()
        cy.get('#igUpload1_fc').children('div').should('have.length', multipleFile.length)

    })

    //changing the file name of file at the time of uploading
    it.only('File name changing at the time of uploading', () => {
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        let filename = 'env.png'
        cy.get('#igUpload1_ibb_fp').attachFile({ filePath: filename, fileName: 'abcd.png' })
        cy.get('#igUpload1_0__pbrflnm').should('have.text', 'abcd.png')
    })
})



