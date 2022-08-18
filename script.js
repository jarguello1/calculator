// initialize variables
let displayValue = "";
let currentOperator = "";
let previousValue = "";
let combinedValue = "";

// Add current value to display row
const display = document.querySelector('#display');
display.textContent = displayValue;

//Erases everything in the display and sets all variables to empty
function clearDisplay()  {
    displayValue = "";
    currentOperator = "";
    previousValue = "";
    display.textContent = displayValue;
}

const clear = document.getElementById('clear');
clear.addEventListener('click', clearDisplay);

//Checks if there is a negative sign and adds or removes it accordingly
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

// Divides number by 100 to turn it into a percent value
function makePercent() {
    number = parseInt(displayValue);
    number /= 100;
    displayValue = number.toString();
    display.textContent = displayValue;
}

const percent = document.getElementById('percent');
percent.addEventListener('click', makePercent);

// Adds number to the display
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

// Array to add function to each number button
let numberText = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
numberText.forEach(function(e) {
    const numberBtn = document.getElementById(e);
    numberBtn.addEventListener('click', numberButton);
});

// adds one decimal if there currently isn't one in the display.
function decimalPoint(e) {
    if (displayValue.includes(".")) {
        return;
    } else if (!(displayValue.includes("."))) {
        let point = e.target.textContent;
        displayValue += point;
        display.textContent = displayValue;
    }
}

const decimal = document.getElementById("decimal");
decimal.addEventListener('click', decimalPoint);

// Sets the calculator to add
function addition() {
    // if there is nothing in the previousValue variable
    // set previousValue to DisplayValue and change current operator to +
    if (currentOperator !== "+" && previousValue === "") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "+"
    } else if  (currentOperator !== "+" && previousValue !== ""){ //if there is a previous value, just change operator to +
        displayValue = "";
        currentOperator = "+"
    } else {
        return;
    }
}

// Same function as addition just for subtraction
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

// Same function as addition just for multiplication
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

// Same function as addition just for division
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

// Add functions to their respective buttons
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

// Takes the last stored value, the current operator, and the currently displayed value
// Does the math accordingly depending on which operator is chosen
function operate() {
    if (displayValue === "") {
        displayValue = "0";
    }
    // If one of the numbers has a decimal change values to floats
    if ((displayValue.includes(".") || previousValue.includes("."))) {
        num1 = parseFloat(displayValue);
        num2 = parseFloat(previousValue);
    } else { // else change them to ints
        num1 = parseInt(displayValue);
        num2 = parseInt(previousValue);
    }
    solution = 0;
    if (currentOperator==="+") {
        solution = (num1 + num2);
        displayValue = solution;
    } else if (currentOperator==="-") {
        solution = (num2 - num1);
        previousValue = solution;
    } else if (currentOperator==="*") {
        solution = (num1 * num2)
        displayValue = solution;
    } else if (currentOperator==="/") {
        solution = (num2 / num1);
        previousValue = solution;
    }

    display.textContent = solution;
}