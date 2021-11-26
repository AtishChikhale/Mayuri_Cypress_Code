//Synchronous=> Executing the code one by one known as synchronous
//Asynchronous=>Executing the code in bunch known as asynchronous ,and whatever the request get first it shown in browser ex FB

// javascript - syncronous    =>        But avoid complication said its Asynchronous
// javascript - Asyncronous   =>        When ajax code added in javascript    

// cypress - commands - Asyncronous
// cypress - execution  - is always synchronus

// In cypress we can  use js code , yes we will make it sync

//Js As synchronous =>(execution or responce step by step gives)
function add() {
    console.log(7 + 8)
}

function second() {
    console.log(8 + 8)
}
add()
second()

//Js As Asynchronous =>by using setTimeout function we can made it asynchronously
// function add() {
//     setTimeout(() => {
//         console.log(4 + 4)
//     }, 3000)
// }
// function second() {
//     console.log(8 + 8)
// }
// add()
// second()


