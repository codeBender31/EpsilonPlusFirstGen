document.addEventListener("DOMContentLoaded", function () {
    const iconButton = document.querySelector(".icon-button");

    iconButton.addEventListener("click", function () {
        // Redirect to the login page
        window.location.href = "../index.html";
    });
});