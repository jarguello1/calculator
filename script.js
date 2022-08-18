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

const add = document.getElementById('add');
add.addEventListener('click', addition);

function addition() {
    if (displayValue !== "") {
        previousValue = displayValue;
        displayValue = "";
        currentOperator = "+"
    } else {
        return;
    }

}

function operate() {
    combinedValue = displayValue+currentOperator+previousValue;
    display.textContent = combinedValue;
}