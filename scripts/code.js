/*jslint es6 */

// Display menu

const logoElem = $(".nav__logo");
const menuElem = $(".nav__menu");
const iconElem = $(".nav__icons");

logoElem.click(function () {
    "use strict";
    if (menuElem.hasClass("slideInDown")) {

        menuElem.css("display", "none");
        iconElem.css("display", "none");

        menuElem.toggleClass("slideInDown");
        iconElem.toggleClass("slideInDown");

    } else {
        menuElem.css("display", "flex");
        iconElem.css("display", "flex");

        menuElem.toggleClass("slideInDown");
        iconElem.toggleClass("slideInDown");
    }
});


// Smooth scrolling

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
