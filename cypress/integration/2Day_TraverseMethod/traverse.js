// Test Scenario => What to test
// Test Case => How to test
// with the help of javascipt we can create delete update and retrive the element same thing can be done with attibute 

//==================================================================================================

describe("Traverse Method in Cypress", () => {
    //To select the element in cypress we have following approches
    //and all element in cypress are the css selector

    //1. By using tagname
    cy.get('h1') //======>cy.get(css selector)

    //2. By using ID
    cy.get('#hello1') //======>cy.get(css selector)

    //3. By using class
    cy.get('.general') //======>cy.get(css selector)

    //By using attributes //common formula *****tagname[attribute="value"]******
    cy.get('h1[name="message"]') //======>cy.get(css selector)

    //By using contains i.e. text
    cy.contains('Hello') //======>cy.get(css selector)

    //==================================================================================
    //cy.get() ,cy.contains() method return single element as well as multiple element

    {/* <ul>
<li class="fruits">Apple</li>
<li class="fruits">Apple</li>
<li class="fruits">Apple</li>
<li class="fruits">Apple</li>
<li class="fruits">chiku</li>
<li class="fruits">Banana</li>
<li class="fruits">Dragaoan</li>
<li class="fruits" id="last">Grapes</li>
</ul> */}

    //cy.get(".fruits") //nodelist => multiple element 
    //cy.get("#last") //single element

    //cy.contains("Apple") //nodelist => multiple element
    //cy.contains("chiku") //single element

//===========================================================================================

//What is mean by traverse => in HTML page in order to navigate parent to child child to parent and sibling we required methods so we have traverse method

 {/* <ul id="listf">
<li class="fruits">Apple</li>
<li class="fruits">chiku</li>
<li class="fruits">Banana</li>
<li class="fruits">Dragaoan</li>
<li class="fruits" id="last">Grapes</li>
</ul> */}

cy.get("li").parent() //ul element
cy.get("li").first() // <li class="fruits">Apple</li>
cy.get("li").last() // <li class="fruits" id="last">Grapes</li>
cy.get("li").eq(2) // <li class="fruits">Banana</li>
})




//========================================================================================================
//Explaination on anonymous function
// function add(){
//     let a=10
//     let b=20
//     console.log(a+b)
// }

// add()//30

// let h1=document.querySelector('h1')
// h1.addEventListener('click',add) //in that code on every click on h1 element function is called
// add()
//in tha ablove problem we can call the function as the roll of callback function and outside of seperate function as well so to avoild this we use anonymous function
//means insted of calling the function we write the function there

//==================================================================================================================

// let h1=document.querySelector('h1')
// h1.addEventListener('click',function(){
//     console.log(2+2)//in this function we cant cll function outside so it called as anonymous function
// }) 

//===================================================================================================================

// let h1 = document.querySelector('h1')
// h1.addEventListener('click', () => console.log(2 + 2))//in this function we cant cll function outside so it called as anonymous function

//====================================================================================================================