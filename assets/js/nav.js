$(document).ready(function(){
    const navbar = $(".navbar");
    const logo = $(".logo");
    const navLinks = $(".navbar-link");
    const dropdown = $(".dropdown");
    const dropdownButton = $(".dropdown-button");

    $('.navbar-link').each(function() {
        $(this).css('--label', `"${$(this).text()}"`);
    });

    if(!navbar.hasClass("active")){
        function updateNavbar() {
            if ($(window).scrollTop() > 10) {
                navbar.addClass("scrolled");
                dropdown.addClass("scrolled");
                navLinks.addClass("scrolled");
                logo.css("filter", "invert(1)");
            } else {
                navbar.removeClass("scrolled");
                dropdown.removeClass("scrolled");
                navLinks.removeClass("scrolled");
                logo.css("filter", "none");
            }

            if ($(window).scrollTop() > 120) {
                navbar.addClass("finished");
                dropdown.addClass("finished");
            } else {
                navbar.removeClass("finished");
                dropdown.removeClass("finished");
            }
        }
    } else {
        logo.css("filter", "invert(1)");
        navLinks.addClass("scrolled");
        navbar.addClass("finished");
        dropdown.addClass("finished");
    }

    $(window).on('scroll', updateNavbar);
    updateNavbar();

    dropdownButton.on('click', function() {
        $(this).children('a').toggleClass("active");
        dropdown.toggleClass("active");
    });

    dropdownButton.on('mouseenter', function() {
        $(this).children('a').addClass("active");
        dropdown.addClass("active");
    });

    dropdownButton.on('mouseleave', function() {
        setTimeout(() => {
            if (!dropdown.is(':hover')) {
                dropdownButton.children('a').removeClass("active");
                dropdown.removeClass("active");
            }
        }, 200);
    });

    dropdown.on('mouseenter', function() {
        dropdownButton.children('a').addClass("active");
        dropdown.addClass("active");
    });

    dropdown.on('mouseleave', function() {
        setTimeout(() => {
            if (!dropdownButton.is(':hover')) {
                dropdownButton.children('a').removeClass("active");
                dropdown.removeClass("active");
            }
        }, 200);
    });

});