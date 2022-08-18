let displayValue = "";

const display = document.querySelector('#display');
display.textContent = displayValue;

function clearDisplay()  {
    displayValue = "";
    display.textContent = displayValue;
}

function numberButton(e) {
    let number = e.target.textContent;
    displayValue += number;
    display.textContent = displayValue;
}

const clear = document.getElementById('clear');
clear.addEventListener('click', clearDisplay);

const one = document.getElementById('one');
one.addEventListener('click', numberButton)
