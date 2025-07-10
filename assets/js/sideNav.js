document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.getElementById("hamburger-button");
    const closeButton = document.getElementById("close-button");
    const sideNav = document.getElementById("side-nav");

    hamburgerButton.addEventListener("click", () => {
        sideNav.classList.add("open");
    });

    closeButton.addEventListener("click", () => {
        sideNav.classList.remove("open");
    });
})