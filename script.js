//Basic math functions
function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return (Number(num1) / Number(num2))
}

//Create a new function operate that takes an operator and 2 
//numbers and then calls one of the above functions on the numbers.

let numButton = document.getElementsByClassName('numbutton');
let operateButton = document.getElementsByClassName('operatebutton');
let equalsButton = document.getElementById('equal');
let display = document.getElementById('display');
let userInput1 = ''
let userInput2 = ''
let userOperator = ''

function operate(operator, num1, num2) {
    return this[operator](num1, num2);
 }


Array.from(numButton).forEach(function(button) //save user input to variable
{
   button.addEventListener('click', function(e){
    userInput1 += button.innerText
    display.innerText = userInput1
   })
})


// Array.from(numButton).forEach(function(button) //display to screen
// {
//    button.addEventListener('click', function(e){
//     display.innerText = userInput1
//    })
// })


Array.from(operateButton).forEach(function(button) //operate button selected
{
   button.addEventListener('click', function(e){
    display.innerText = button.innerText
    userInput2 = userInput1
    userInput1 = ''
    userOperator = button.id
   })
})

equalsButton.addEventListener('click', function(){    
    result = operate(userOperator, userInput2, userInput1)
    display.innerText = result
    userInput1 = result

   })

