// User.js
const Arithmetic = require('./Arithmetic');

class User {
    constructor(firstName, lastName, gradeLevel, username, email, password, arithmetic) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gradeLevel = gradeLevel;
        this.username = username;
        this.email = email;
        this.password = password;
        this.arithmetic = arithmetic;
    }

    getArithmetic() {
        return this.arithmetic;
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
        console.log("Email: " + this.email);
    }
}

module.exports = User;
