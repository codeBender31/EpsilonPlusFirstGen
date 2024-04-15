// User.js
const Arithmetic = require('./Arithmetic');
const Reading = require('./Reading');
const Finance = require('./Finance');
const Fitness = require('./Fitness');

class User {
constructor(firstName, lastName, gradeLevel, username, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gradeLevel = gradeLevel;
    this.username = username;
    this.email = email;
    this.password = password;
    this.arithmetic = new Arithmetic();
    this.reading = new Reading(); // Assign the provided Reading object
    this.finance = new Finance(); // Assign the provided Finance object
    this.fitness = new Fitness(); // Assign the provided Fitness object
}

  // Getter methods
  // Getter for Arithmetic object
  getReading() {
      return this.reading;
  }

    getArithmetic() {
        return this.arithmetic;
    }

  getFinance() {
      return this.finance;
  }

  getFitness() {
    return this.fitness;
  }
    
    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getGradeLevel() {
        return this.gradeLevel;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    setGradeLevel(gradeLevel) {
        this.gradeLevel = gradeLevel;
    }

    displayUserInfo() {
        console.log("First Name: " + this.firstName);
        console.log("Last Name: " + this.lastName);
        console.log("Grade Level: " + this.gradeLevel);
        console.log("Username: " + this.username);
        console.log("Password: " + this.password);
        console.log("Email: " + this.email);
    }
}

module.exports = User;
