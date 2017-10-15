/*=========================================

Template Name: Personal Portfolio Template
Author: Rory Standley
Version: 1.0
Design and Developed by: Rory Standley

NOTE: This is the custom jQuery file for the template

=========================================*/

(function ($) {
    "use strict";

    var $window = $(window),
        $body = $('body');

    $(document).on('ready', function () {

        /*=============================
                    Contact Form
        ==============================*/
        /**
         * We are setting the email via JS to try and stop Bots spamming me
         */
        var contactform = document.getElementById('formaction');
        contactform.setAttribute('action', '//formspree.io/' + 'rorystandley' + '@' + 'gmail' + '.' + 'com');

        /*=============================
                    Sticky header
        ==============================*/
        $('.navbar-collapse a').on('click', function () {
            $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function () {
            if ($(".navbar").offset().top > 100) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });


        /*=============================
                   Smoothscroll js
           ==============================*/
        $(function () {
            $('a.smoth-scroll').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1000);
                event.preventDefault();
            });
        });


        /*======================================
            jquery scroll spy
        ========================================*/
        $body.scrollspy({

            target: ".navbar-collapse",
            offset: 95

        });


        /*=================================
               Bootstrap menu fix
        ==================================*/
        $(".navbar-toggle").on("click", function () {

            $body.addClass("mobile-menu-activated");

        });

        $("ul.nav.navbar-nav li a").on("click", function () {

            $(".navbar-collapse").removeClass("in");

        });


        /*====================================================
            background-image flickering solution for mobile
            =======================================================*/
        var bg = jQuery("#home");
        function resizeBackground() {
            bg.height(jQuery(window).height() + 60);
        }
        resizeBackground();


        /*==========================
            Intro typer
        ============================*/
        var element = $(".element");

        $(function () {
            element.typed({
                strings: ["Web Developer.", "Mobile Developer.", "Freelancer."],
                typeSpeed: 100,
                loop: true,
            });
        });


        /*=============================
               Parallax
       ==============================*/
        $window.stellar({
            responsive: true,
            positionProperty: 'position',
            horizontalScrolling: false
        });


        /*=============================
            Magnific Popup
        ==============================*/
        $('.work-popup').magnificPopup({ type: 'image' });


        /*=============================
            CounterUp
        ==============================*/
        $('.stat-area').on('inview', function (event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.counter').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

        /*=============================
                WOW js
        ==============================*/
        new WOW({ mobile: false }).init();


        /*=========================================
                    jQuery mixItUp
        =======================================*/

        $('.work-inner').mixItUp();


        /*===================================
                owl carousel testimonial
         ====================================*/
        $(".testimonial-list").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });

}(jQuery));

