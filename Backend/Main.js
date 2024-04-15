
// // User login
// function authenticateUser(username, plainPassword) {
//     // Find the user by username (you'll need to implement this)
//     const user = findUserByUsername(username);

//     if (!user) {
//         // User not found
//         return false;
//     }

//     // Compare the stored hash with the provided password
//     return bcrypt.compareSync(plainPassword, user.passwordHash);
// }

const { MongoClient } = require('mongodb');

const myPassword = process.env['MONGO_PASSWORD'];
const myUsername = process.env['MONGO_USERNAME'];

const uri = `mongodb+srv://${myUsername}:${myPassword}@testaccounts.9ywf1wh.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

const bcrypt = require('bcrypt');
const User = require('./User');
const Arithmetic = require('./Arithmetic');
const Reading = require('./Reading');
const Finance = require('./Finance');
const Fitness = require('./Fitness');

// Create an array to store the users
const users = [];

// Create User objects without initial scores
const newUser1 = createNewUser("User1", "One", 8, "user1", "user1@example.com", "password123");
const newUser2 = createNewUser("User2", "Two", 9, "user2", "user2@example.com", "password456");
const newUser3 = createNewUser("User3", "Three", 10, "user3", "user3@example.com", "password789");
const newUser4 = createNewUser("User4", "Four", 11, "user4", "user4@example.com", "passwordabc");

// Add users to the array
users.push(newUser1);
users.push(newUser2);
users.push(newUser3);
users.push(newUser4);

// Now, you can add and modify scores for each user as needed.
// Example:
const additionScores = ["11/26/2023, 70.52", "11/27/2023, 80.0"];
newUser1.getArithmetic().appendScores("Addition", additionScores);

const subtractionScores = ["11/25/2023, 85.0", "11/28/2023, 75.5"];
newUser2.getArithmetic().appendScores("Subtraction", subtractionScores);

const multiplicationScores = ["11/24/2023, 92.5", "11/29/2023, 88.0"];
newUser3.getArithmetic().appendScores("Multiplication", multiplicationScores);

const divisionScores = ["11/23/2023, 78.3", "11/30/2023, 90.2"];
newUser4.getArithmetic().appendScores("Division", divisionScores);

// Append new addition scores for user3
const additionalAdditionScores = ["11/26/2023, 83.5", "11/26/2023, 95.5"];
newUser3.getArithmetic().appendScores("Addition", additionalAdditionScores);

// Update reading for user4
const bookTitle4 = "The Alchemist";
const initialReadingEntry4 = ["11/26/2023", "30:52", "Paulo Coelho", "18"];
newUser4.getReading().addReadingEntry(bookTitle4, initialReadingEntry4);

// Test 1: Add $100 to the amount saved for user2
newUser2.getFinance().addAmountSaved(100.0);
// Test 2: Add $50 to the amount spent for user2
newUser2.getFinance().addAmountSpent(50.0);

// Test data for newUser1's fitness
newUser1.getFitness().setSteps(8000);
newUser1.getFitness().setRunTimeMinutes(30);
newUser1.getFitness().setReps(15);
newUser1.getFitness().setCrunches(30);
newUser1.getFitness().setPushups(20);
newUser1.getFitness().setPullups(10);
newUser1.getFitness().setThrowingDistanceYards(40);

// Display user information, arithmetic scores, and reading progress
for (const user of users) {
    console.log("User Information:");
    user.displayUserInfo();
    console.log("User's Arithmetic Scores:");
    console.log(user.getArithmetic().displayAllScores());
    console.log(user.getFinance().displayFinancialSummary());
    console.log(user.getFitness().displayFitnessData());

    // Display reading progress if available
    if (user.getReading().getAllBookTitles().length > 0) {
        console.log("Reading Progress:");
        for (const bookTitle of user.getReading().getAllBookTitles()) {
            console.log("Book Title: " + bookTitle);
            const readingEntries = user.getReading().getReadingEntries(bookTitle);
            for (const entry of readingEntries) {
                console.log("Date: " + entry[0]);
                console.log("Time Read: " + entry[1]);
                console.log("Author: " + entry[2]);
                console.log("Last Page Read: " + entry[3]);
            }
        }
    } else {
        console.log("No reading progress found.");
    }

    console.log();
}

// Helper function to create a User object without initial scores
function createNewUser(firstName, lastName, gradeLevel, username, email, password) {
    // Create an empty Arithmetic object for the user
    const arithmetic = new Arithmetic();
    // Create a Reading object
    const reading = new Reading();
    // Create a Finance object
    const finance = new Finance();
     // Generate a salt and hash the password
    const saltRounds = 10; // The number of salt rounds, you can adjust this value
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    // Create and return the User object
    return new User(firstName, lastName, gradeLevel, username, email, hashedPassword, arithmetic, reading, finance);
}

// async function main2() {
//   try {
//     await client.connect();
//     console.log('Connected to database');

//     // Perform database operations here
//     await clearDatabase();
//     await insertUser(new User('John', 'Doe', 10, 'john_doe', 'john@example.com', 'password123'));
//     await insertUser(new User('Alice', 'Smith', 9, 'alice_smith', 'alice@example.com', 'pass123'));
//     await insertUser(new User('Eve', 'Johnson', 11, 'eve_johnson', 'eve@example.com', 'evepassword456'));

//   } catch (error) {
//     console.error('An error occurred:', error);
//   } finally {
//     await client.close();
//   }
// }

async function clearDatabase() {
  const collection = client.db('test').collection('users');
  await collection.deleteMany({});
  console.log('Database cleared.');
}

async function insertUser(user) {
  const collection = client.db('test').collection('users');
  await collection.insertOne(user);
  console.log('User inserted successfully.');
}

// main2().catch(console.error);

async function main3() {
  try {
    await client.connect();
    console.log('Connected to database');

    // Perform database operations here
    await clearDatabase();
    for(const user of users){
      await insertUser(user);
    }
    // await insertUser(new User('John', 'Doe', 10, 'john_doe', 'john@example.com', 'password123'));
    // await insertUser(new User('Alice', 'Smith', 9, 'alice_smith', 'alice@example.com', 'pass123'));
    // await insertUser(new User('Eve', 'Johnson', 11, 'eve_johnson', 'eve@example.com', 'evepassword456'));

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await client.close();
  }
}

main3().catch(console.error);
