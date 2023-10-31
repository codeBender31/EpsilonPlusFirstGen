document.addEventListener("DOMContentLoaded", function() {
  const signUpForm = document.getElementById("signup-form");

  signUpForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const gradeLevel = document.getElementById("grade-level").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter.");
    } else {
      alert("Signup successful!");
      window.location.href = "../Main/index.html"; 
    }

    const user = {
      firstName: firstName,
      lastName: lastName,
      gradeLevel: gradeLevel,
      username: username,
      email: email,
      password: password
    };

    console.log("User object to be sent to the server:", user);

    signUpForm.reset();
  });
});
