//Obtain Login form element 
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

  //Create function to handle input from user 
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); //Prevent default

        //Get username 
        const username = document.getElementById("username").value;
        //Get password 
        const password = document.getElementById("password").value;

        // Replace with your own validation logic
        if (username === "username" && password === "password") {
            alert("Login successful!");
          window.location.href = "Main/index.html"; // Change "main.html" to the actual URL of your main page
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
