$(document).ready(function() {
    const $hamburgerButton = $("#hamburger-button");
    const $closeButton = $("#close-button");
    const $sideNav = $("#side-nav");

    $hamburgerButton.on("click", function() {
        $sideNav.addClass("open");
    });

    $closeButton.on("click", function() {
        $sideNav.removeClass("open");
    });
});