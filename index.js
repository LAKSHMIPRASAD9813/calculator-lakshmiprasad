// Append value to the input field
function appendValue(value) {
    const resultField = document.getElementById('result');
    const currentValue = resultField.value;

    // Prevent multiple consecutive dots
    if (value === '.' && (currentValue === '' || currentValue.slice(-1) === '.')) return;
    if (['+', '-', '*', '/', '%'].includes(value) && ['+', '-', '*', '/', '%'].includes(currentValue.slice(-1))) return;

    resultField.value += value; // Append the clicked button's value to the input box
}

// Clear the input field
function clearResult() {
    document.getElementById('result').value = ''; // Clear the input box
}

// Backspace: Remove the last character
function backspace() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1); // Remove the last character
}

// Calculate the result from the input
function calculateResult() {
    const resultField = document.getElementById('result');
    const expression = resultField.value;

    // Basic validation: Check for invalid trailing operators or empty input
    if (expression === '' || /[\+\-\*\/\%\.]$/.test(expression)) {
        resultField.value = 'Error'; // Display error for invalid input
        return;
    }

    // Evaluate the sanitized expression
    const result = eval(expression); // Avoid try-catch; eval handles valid input
    resultField.value = result;
}

// Calculate the square root of the value in the input
function calculateRoot() {
    const resultField = document.getElementById('result');
    const value = parseFloat(resultField.value);

    if (isNaN(value)) {
        resultField.value = 'Error'; // Handle invalid input for square root
    } else {
        resultField.value = Math.sqrt(value); // Calculate and display the square root
    }
}
