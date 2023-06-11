let resultElement = document.getElementById('result');
let currentTheme = 'default';

function appendToResult(value) {
    resultElement.value += value;
}

function calculateResult() {
    try {
        resultElement.value = eval(resultElement.value);
    } catch (error) {
        resultElement.value = 'Error';
    }
}

function clearResult() {
    resultElement.value = '';
}

function toggleTheme() {
    let calculatorElement = document.querySelector('.calculator');
    calculatorElement.classList.remove(currentTheme);

    if (currentTheme === 'default') {
        calculatorElement.classList.add('dark');
        currentTheme = 'dark';
    } else if (currentTheme === 'dark') {
        calculatorElement.classList.add('light');
        currentTheme = 'light';
    } else {
        calculatorElement.classList.add('default');
        currentTheme = 'default';
    }
}