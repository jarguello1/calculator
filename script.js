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


const clear = document.getElementById('clear');
clear.addEventListener('click', clearDisplay);

function positiveOrNegative() {
    if (displayValue.charAt(0) !== "-") {
        displayValue = "-" + displayValue;
    } else if (displayValue.charAt(0) === "-") {
        displayValue = displayValue.substring(1);
    }
    display.textContent = displayValue;
}

const sign = document.getElementById('sign');
sign.addEventListener('click', positiveOrNegative);


function makePercent() {
    number = parseInt(displayValue);
    number /= 100;
    displayValue = number.toString();
    display.textContent = displayValue;
}

const percent = document.getElementById('percent');
percent.addEventListener('click', makePercent);

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

let numberText = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
numberText.forEach(function(e) {
    const numberBtn = document.getElementById(e);
    numberBtn.addEventListener('click', numberButton);
});

function decimalPoint(e) {
    if (displayValue.includes(".")) {
        return;
    } else if (!(displayValue.includes(".")) && displayValue === "") {
        return;
    } else if (!(displayValue.includes("."))) {
        let point = e.target.textContent;
        displayValue += point;
        display.textContent = displayValue;
    }
}

const decimal = document.getElementById("decimal");
decimal.addEventListener('click', decimalPoint);

function addition() {
    if (currentOperator !== "+" && previousValue === "") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "+"
    } else if  (currentOperator !== "+" && previousValue !== ""){
        displayValue = "";
        currentOperator = "+"
    } else {
        return;
    }
}

function subtraction () {
    if (currentOperator !== "-" && previousValue === "") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "-"
    } else if  (currentOperator !== "-" && previousValue !== ""){
        displayValue = "";
        currentOperator = "-"
    } else {
        return;
    }
}

function multiplication () {
    if (currentOperator !== "*" && previousValue === "") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "*"
    } else if  (currentOperator !== "*" && previousValue !== ""){
        displayValue = "";
        currentOperator = "*"
    } else {
        return;
    }
}

function division () {
    if (currentOperator !== "/" && previousValue === "") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "/"
    } else if  (currentOperator !== "/" && previousValue !== ""){
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
    if (displayValue === "") {
        displayValue = "0";
    }
    num1 = parseInt(displayValue);
    num2 = parseInt(previousValue);
    solution = 0;
    if (currentOperator==="+") {
        solution = (num1 + num2);
        displayValue = solution;
        display.textContent = solution;
    } else if (currentOperator==="-") {
        solution = (num2 - num1);
        previousValue = solution;
        display.textContent = solution;
    } else if (currentOperator==="*") {
        solution = (num1 * num2)
        displayValue = solution;
        display.textContent = solution;
    } else if (currentOperator==="/") {
        solution = (num2 / num1);
        previousValue = solution;
        display.textContent = solution;
    }
}