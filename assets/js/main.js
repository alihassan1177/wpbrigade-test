$(function(){
    $('.slider').owlCarousel({
        items : 1,
        loop : true,
        nav : true,
        autoplay : true,
        smartSpeed : 500,
        dotsEach : true,
        navText : [
            '<img src="/assets/img/hero-slider-left-arrow.png" />',
            '<img src="/assets/img/hero-slider-right-arrow.png" />'
        ]
    })

    $('.product-slider').owlCarousel({
        items : 3,
        loop : false,
        nav : false,
        autoplay : true,
        smartSpeed : 500,
        dotsEach : false,
        navText : [
            '<img src="/assets/img/hero-slider-left-arrow.png" />',
            '<img src="/assets/img/hero-slider-right-arrow.png" />'
        ]
    })

    
})