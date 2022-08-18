let displayValue = "";
let currentOperator = "";
let previousValue = "";
let combinedValue = "";

const display = document.querySelector('#display');
display.textContent = displayValue;

function clearDisplay()  {
    displayValue = "";
    currentOperator = "";
    previousValue = "";
    display.textContent = displayValue;
}

function numberButton(e) {
    let number = e.target.textContent;
    if (displayValue === "0") {
        displayValue = number;
        display.textContent = displayValue;
    } else if (displayValue !== "0") {
        let number = e.target.textContent;
        displayValue += number;
        display.textContent = displayValue;
    }
}

const clear = document.getElementById('clear');
clear.addEventListener('click', clearDisplay);

let numberText = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
numberText.forEach(function(e) {
    const numberBtn = document.getElementById(e);
    numberBtn.addEventListener('click', numberButton);
});


function addition() {
    if (displayValue !== "+") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "+"
    } else {
        return;
    }
}

function subtraction () {
    if (displayValue !== "-") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "-"
    } else {
        return;
    }
}

function multiplication () {
    if (displayValue !== "*") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "*"
    } else {
        return;
    }
}

function division () {
    if (displayValue !== "/") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "/"
    } else {
        return;
    }
}


const add = document.getElementById('add');
add.addEventListener('click', addition);

const subtract = document.getElementById('subtract');
subtract.addEventListener('click', subtraction)

const multiply = document.getElementById('multiply');
multiply.addEventListener('click', multiplication);

const divide = document.getElementById('divide');
divide.addEventListener('click', division);


const equals = document.getElementById('equal');
equals.addEventListener('click', operate);

function operate() {
    num1 = parseInt(displayValue);
    num2 = parseInt(previousValue);
    solution = 0;
    if (currentOperator==="+") {
        currentOperator = "";
        solution = (num1 + num2)
        display.textContent = solution;
    } else if (currentOperator==="-") {
        currentOperator = "";
        solution = (num2 - num1)
        display.textContent = solution;
    } else if (currentOperator==="*") {
        currentOperator = "";
        solution = (num1 * num2)
        display.textContent = solution;
    } else if (currentOperator==="/") {
        currentOperator = "";
        solution = (num2 / num1)
        display.textContent = solution;
    }
}