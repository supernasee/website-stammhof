$(document).ready(function() {
    const $hamburgerButton = $("#hamburger-button");
    const $closeButton = $("#close-button");
    const $sideNav = $("#side-nav");
    const $buttonOpen = $(".button-open");
    const $buttonClose = $(".button-close");
    const $sideDropdown = $(".side-dropdown");

    $sideDropdown.hide();
    $buttonClose.hide();

    $hamburgerButton.on("click", function() {
        $sideNav.addClass("open");
    });

    $closeButton.on("click", function() {
        $sideNav.removeClass("open");
    });

    $buttonOpen.on("click", function() {
        $buttonClose.show();
        $buttonOpen.hide();
        $sideDropdown.show("hidden");
    });

    $buttonClose.on("click", function() {
        $buttonClose.hide();
        $buttonOpen.show();
        $sideDropdown.hide("hidden");
    });
});