document.addEventListener("DOMContentLoaded", function (event) {
    const navbar = document.querySelector(".navbar");
    const logo = document.querySelector(".logo");
    const navLinks = navbar.querySelectorAll(".navbar-link");
    const dropdown = document.querySelector(".dropdown");
    const dropdownButton = document.querySelector(".dropdown-button");

    document.querySelectorAll('.navbar-link').forEach(el => {
        el.style.setProperty('--label', `"${el.textContent}"`);
    });

    if (window.scrollY > 10) {
        navbar.classList.add("scrolled");
        dropdown.classList.add("scrolled");
        navLinks.forEach(link => link.classList.add("scrolled"));
        logo.style.filter = "invert(1)";
    } else {
        navbar.classList.remove("scrolled");
        dropdown.classList.remove("scrolled");
        navLinks.forEach(link => link.classList.remove("scrolled"));
        logo.style.filter = "none";
    }
    if (window.scrollY > 120) {
        navbar.classList.add("finished");
        dropdown.classList.add("finished");
    } else {
        navbar.classList.remove("finished");
        dropdown.classList.remove("finished");
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
            dropdown.classList.add("scrolled");
            navLinks.forEach(link => link.classList.add("scrolled"));
            logo.style.filter = "invert(1)";
        } else {
            navbar.classList.remove("scrolled");
            dropdown.classList.remove("scrolled");
            navLinks.forEach(link => link.classList.remove("scrolled"));
            logo.style.filter = "none";
        }
        if (window.scrollY > 120) {
            navbar.classList.add("finished");
            dropdown.classList.add("finished");
        } else {
            navbar.classList.remove("finished");
            dropdown.classList.remove("finished");
        }
    });

    dropdownButton.addEventListener("click", function () {
        dropdownButton.classList.toggle("active");
        dropdown.classList.toggle("active");
    })

    dropdownButton.addEventListener("mouseenter", function () {
        dropdownButton.classList.add("active");
        dropdown.classList.add("active");
    })

    dropdownButton.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if(!dropdown.matches(':hover')) {
                dropdownButton.classList.remove("active");
                dropdown.classList.remove("active");
            }
        }, 200);
    })

    dropdown.addEventListener("mouseenter", function () {
        dropdownButton.classList.add("active");
        dropdown.classList.add("active");
    })

    dropdown.addEventListener("mouseleave", function () {
        setTimeout(() => {
            if(!dropdownButton.matches(':hover')) {
                dropdownButton.classList.remove("active");
                dropdown.classList.remove("active");
            }
        }, 200);
    })
})