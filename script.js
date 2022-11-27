//Basic math functions
function add(num1, num2 = 0) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2 = 0) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2 = 1) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2 = 1) {
    if(num2 != 0)
    return (Number(num1) / Number(num2))
    else {return "ERROR"}
}

//Create a new function operate that takes an operator and 2 
//numbers and then calls one of the above functions on the numbers.

//loading buttons
let numButton = document.getElementsByClassName('numbutton');
let operateButton = document.getElementsByClassName('operatebutton');
let decimalButton = document.getElementById('decimal');
let backspaceButton = document.getElementById('backspace');
let equalsButton = document.getElementById('equal');
let clearButton = document.getElementById('clear');
let display = document.getElementById('display');
//initial values
let recentInput = ''
let lastInput = ''
let userOperator = ''



Array.from(numButton).forEach(function(button) //save user input to variable
{
   button.addEventListener('click', function(e){
    if (recentInput.length <= 10 || recentInput === 0) {
        if (recentInput === 0) { //removes leading zero when cleared
            recentInput += button.innerText
            recentInput = Array.from(recentInput).slice(1)
            recentInput = recentInput.join("")
            display.innerText = recentInput
        }
        else {
    recentInput += button.innerText
    display.innerText = recentInput
        }
    }
    else {
    display.innerText = recentInput
    }
   })
})

decimalButton.addEventListener('click', function(){     //saves decimal button input to variable
    if (recentInput.includes(".") === true) { // prevents multiple decimal points
        display.innerText = recentInput
    }
    else {
    recentInput += decimalButton.innerText
    display.innerText = recentInput
    }
})

backspaceButton.addEventListener('click', function(){     //backspace removes most recent entry
    if (recentInput.length > 1) {
    recentInput = recentInput.slice(0, -1)
    }
    else {
    recentInput = 0
    }
    display.innerText = recentInput
   })


function operate(operator, num1, num2) { // operation function
    return this[operator](num1, num2);
 }

Array.from(operateButton).forEach(function(button) //operator button click listener
{
   button.addEventListener('click', function(e){
    userOperator = button.id
    lastInput = Number(recentInput)
    recentInput = ''
   })
})

equalsButton.addEventListener('click', function(){     //equals button click listener
    result = operate(userOperator, lastInput, recentInput)
    result = Number(result.toFixed(10)) // keeps results from overflowing display
    display.innerText = result 
    recentInput = result

   })

function clearDisplay(){ //clears screen
    recentInput = 0
    lastInput = 0
    userOperator = ''
    display.innerText = 0
}

clearButton.addEventListener('click', function(){     //clear button click listener
    clearDisplay()
   })


// const buttons = document.querySelectorAll('.button');

// window.addEventListener('mousedown', function (e) {
// if (e.target.classList.contains('button') === true) {
// e.target.classList.add('pressed');
// }
// })



// function removeTransition(e) { //remove transition function
//     if (e.propertyName !== 'transform') return // skip it if it's not a transform
//     this.classList.remove('pressed')
//    }


// buttons.forEach(button => button.addEventListener('transitionend', removeTransition)); //remove transition listener
