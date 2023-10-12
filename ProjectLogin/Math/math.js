// Function to generate random arithmetic problems based on the selected operation
function generateProblems(operator) {
    const problemsContainer = document.querySelector('.problems-container');
    problemsContainer.innerHTML = ''; // Clear previous problems
    
    // Check if the operator is provided, if not, return without generating problems
    if (!operator) {
        return;
    }

    for (let i = 0; i < 20; i++) {
        const problem = document.createElement('div');
        problem.className = 'problem';
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        let result;
        
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                // Ensure the division is valid (no division by zero)
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    // If division by zero, generate a different problem
                    i--;
                    continue;
                }
                break;
        }

        problem.textContent = `${num1} ${operator} ${num2} = `;
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'user-input';
        input.dataset.answer = result; // Store the correct answer in a custom attribute
        problem.appendChild(input);
        problemsContainer.appendChild(problem);
    }
}

// Add event listeners to arithmetic buttons
document.getElementById('additionBtn').addEventListener('click', function() {
    generateProblems('+');
});

document.getElementById('subtractionBtn').addEventListener('click', function() {
    generateProblems('-');
});

document.getElementById('multiplicationBtn').addEventListener('click', function() {
    generateProblems('*');
});

document.getElementById('divisionBtn').addEventListener('click', function() {
    generateProblems('/');
});



// Timer functionality
let minutes = 0;
let seconds = 0;
let timerInterval;

function startTimer() {
    timerInterval = setInterval(function () {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
}

// Add event listeners to arithmetic buttons
document.getElementById('additionBtn').addEventListener('click', function() {
    generateProblems('+');
    startTimer(); // Start the timer when the user picks an arithmetic button
});

document.getElementById('subtractionBtn').addEventListener('click', function() {
    generateProblems('-');
    startTimer(); // Start the timer when the user picks an arithmetic button
});

document.getElementById('multiplicationBtn').addEventListener('click', function() {
    generateProblems('*');
    startTimer(); // Start the timer when the user picks an arithmetic button
});

document.getElementById('divisionBtn').addEventListener('click', function() {
    generateProblems('/');
    startTimer(); // Start the timer when the user picks an arithmetic button
});

