// Get the screen element
let buffer = '0';
const screen = document.querySelector('.screen');




// Function to append numbers to the screen
function appendToScreen(value) {
    // Check if screen content length is less than or equal to 14
    if (screen.textContent.length <= 14) {
        // Check if screen content is '0', replace it with the new value
        if (screen.textContent === '0') {
            screen.textContent = value;
        } else {
            // Append the new value to the existing screen content
            screen.textContent += value;
        }
    }
}




// Function to clear the screen
function clearScreen() {
    screen.textContent = '0';
}




// Function to handle backspace
function backspace() {
    let currentContent = screen.textContent;
    screen.textContent = currentContent.slice(0, -1);
    if (screen.textContent === '') {
        screen.textContent = '0';
    }
}




// // Function to append operators to the screen
// function appendOperator(operator) {
//     if(buffer !== 0){
//     // Check if the last character on the screen is not an operator
//     if (!isOperator(screen.textContent.slice(-1))) {
//         // Append the operator to the screen content
//         screen.textContent += operator;
//     }
// }
// }




/*
This function appends an operator to the screen content only if the screen content
is not '0' and the last character is not already an operator. It ensures that operators
  are only added when necessary and avoids consecutive operators. */

function appendOperator(operator) {
    // Check if the screen content is not '0'
    if (screen.textContent !== '0') {
        // Check if the last character is not already an operator
        if (!isOperator(screen.textContent.slice(-1))) {
            // Append the operator to the screen content
            screen.textContent += operator;
        }
    }
}





// Function to check if a character is an operator
function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

// Function to perform calculations
function calculate() {
    // Get the expression from the screen content
    let expression = screen.textContent;
    try {
        // Evaluate the expression and display the result
        screen.textContent = eval(expression);
    } catch (error) {
        // Display an error message if there's a syntax error in the expression
        screen.textContent = 'Error';
    }
}





// Function to append decimal point to the screen
function appendDecimal() {
    // Check if the screen already contains a decimal point
    if (!screen.textContent.includes('.')) {
        // Append the decimal point to the screen content
        screen.textContent += '.';
    }
}



// Add event listeners for click events on buttons
document.querySelectorAll('.calc-but').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        switch (buttonText) {
            case 'C':
                clearScreen();
                break;
            case '←':
                backspace();
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                appendOperator(buttonText);
                break;
            case '=':
                calculate();
                break;
            case '.':
                appendDecimal();
                break;
            default:
                appendToScreen(buttonText);
                break;
        }
    });
});




// Add event listener for keydown event on the entire document
document.addEventListener('keydown', function(event) {
    // Get the pressed key from the event
    const key = event.key;
    // Handle different key presses
    switch (key) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            appendToScreen(key); // Append numbers to the screen
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            appendOperator(key); // Append operators to the screen
            break;
        case 'Enter':
            calculate(); // Perform calculation on pressing Enter key
            break;
        case 'Backspace':
            backspace(); // Handle backspace
            break;
        case '.':
            appendDecimal();
            break;
        case 'c':
        case 'C':
            clearScreen(); // Clear the screen on pressing C key
            break;
        default:
            break;
    }
});







































