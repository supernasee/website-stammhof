$(document).ready(function() {
    const navbar = $('.navbar');
    if (navbar.hasClass("scrolled") || navbar.hasClass("finished")) {
        navbar.removeClass("scroll");
    }

    $(".fade-in").each(function() {
        const $title = $(this);
        setTimeout(function() {
            $title.addClass("opacity-100");
        }, 500);
    });

    const observer = new IntersectionObserver(async function(entries) {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                await new Promise(r => setTimeout(r, 300));
                $(entry.target).addClass('show');
            }
        }
    });

    $(".scroll").each(function() {
        observer.observe(this);
    });

    $(window).on("scroll", function() {
        const scrollVal = $(window).scrollTop() / ($(document).height() - $(window).height());
        $("body").css("--scroll", scrollVal);
    });
});
