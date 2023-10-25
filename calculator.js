let display = document.getElementById('display');
let currentValue = '';

function appendToDisplay(value) {
    currentValue += value;
    display.value = currentValue;
}

function clearDisplay() {
    currentValue = '';
    display.value = '';
}

function calculate() {
    try {
        if (currentValue === '') {
            display.value = '';
        } else {
            currentValue = eval(currentValue);
            display.value = currentValue;
        }
    } catch (error) {
        display.value = '';
    }
}
