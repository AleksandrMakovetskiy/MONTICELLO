$(document).ready(function(){
    $('.slider').slick({
        infinite:true,
        arrows: true,
        dots:true,
        autoplay:true,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 715,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
        ],
    })
});
