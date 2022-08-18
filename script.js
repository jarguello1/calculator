let displayValue = "";

const display = document.querySelector('#display');
display.textContent = displayValue;

function clearDisplay()  {
    displayValue = "";
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
