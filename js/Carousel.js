
$(window).on('load', function(){
    setTimeout(function(){
        $(".preloader").fadeOut('slow');
    },600);
})




$(document).ready(function () {

    // Add scrollspy to <body>
    $('body').scrollspy({ target: ".navbar-nav", offset: 67 });

    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
            $(".navbar-collapse").collapse("hide");
        }
    })
    
    $('#product-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    // testimonial-carousel

    $('#testimonial-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })
})

