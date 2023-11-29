// Main.js
const User = require('./User');
const Arithmetic = require('./Arithmetic');

function main() {
    // Create an ArrayList to store the users
    const users = [];

    // Create User objects and update their scores based on the chosen operation
    const newUser1 = createUserWithScores("User1", "One", 8, "user1", "user1@example.com", "password123", "+", "11/26/2023, 70.52");
    const newUser2 = createUserWithScores("User2", "Two", 9, "user2", "user2@example.com", "password456", "-", "11/25/2023, 85.0");
    const newUser3 = createUserWithScores("User3", "Three", 10, "user3", "user3@example.com", "password789", "*", "11/24/2023, 92.5");
    const newUser4 = createUserWithScores("User4", "Four", 11, "user4", "user4@example.com", "passwordabc", "/", "11/23/2023, 78.3");

    // Append new addition scores for user3
    const additionalAdditionScores = ["11/26/2023, 83.5", "11/26/2023, 95.5"];
    newUser3.getArithmetic().appendScores("Addition", additionalAdditionScores);

    // Add users to the ArrayList
    users.push(newUser1, newUser2, newUser3, newUser4);

    // Display user information and scores
    for (const user of users) {
        console.log("User Information:");
        user.displayUserInfo();
        console.log("User's Arithmetic Scores:");
        console.log(user.getArithmetic().displayAllScores());
        console.log();
    }
}

function createUserWithScores(firstName, lastName, gradeLevel, username, email, password, selectedOperation, scoreData) {
    // Create an Arithmetic object for the user
    const arithmetic = new Arithmetic();

    // Update scores for the user based on the chosen operation
    updateScores(arithmetic, selectedOperation, scoreData);

    // Create and return the User object
    return new User(firstName, lastName, gradeLevel, username, email, password, arithmetic);
}

function updateScores(arithmetic, selectedOperation, scoreData) {
    switch (selectedOperation) {
        case "+":
            arithmetic.addScore("Addition", scoreData);
            break;
        case "-":
            arithmetic.addScore("Subtraction", scoreData);
            break;
        case "*":
            arithmetic.addScore("Multiplication", scoreData);
            break;
        case "/":
            arithmetic.addScore("Division", scoreData);
            break;
        default:
            console.log("Invalid operation selected.");
            break;
    }
}

main();
