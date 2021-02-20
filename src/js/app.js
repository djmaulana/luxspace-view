import "../css/app.css";

import "./menu-toggler";

import "./anchor";

import "./slider";

import "./shopping-cart";

import "./shipping-detail";

import "./accordion";

import "./modal";

// import "./carousel";




// modal

// end modal

// carousel

$(function() {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


// end carousel