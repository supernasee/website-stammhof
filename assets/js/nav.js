$(document).ready(function(){
    const white_navbar = $(".white-navbar");
    const logo = $(".logo");
    const navLinks = $(".navbar-link");
    const dropdown = $(".dropdown");
    const dropdownButton = $(".dropdown-button");

    $('.navbar-link').each(function() {
        $(this).css('--label', `"${$(this).text()}"`);
    });

    if(!white_navbar.hasClass("active")){
        function updateNavbar() {
            if ($(window).scrollTop() > 10) {
                white_navbar.addClass("scrolled");
                dropdown.addClass("scrolled");
                logo.css("filter", "invert(1)");
            } else {
                white_navbar.removeClass("scrolled");
                dropdown.removeClass("scrolled");
                logo.css("filter", "none");
            }
        }
    } else {
        logo.css("filter", "invert(1)");
        navLinks.addClass("scrolled");
        white_navbar.addClass("finished");
        dropdown.addClass("finished");
    }

    $(window).on('scroll', updateNavbar);
    updateNavbar();

    if (window.matchMedia("(pointer: coarse)").matches) {
        dropdownButton.on('click', function() {
            $(this).children('a').toggleClass("active");
            dropdown.toggleClass("active");
        });
    } else {
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
    }
});