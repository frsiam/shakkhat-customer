
$('.my-slick-parent').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-perv btn fs-2 translate-middle"><i class="bi bi-arrow-left-short"></i></button>',

    nextArrow: '<button type="button" class="slick-next btn fs-2 rounded-circle translate-middle"><i class="bi bi-arrow-right-short"></i></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});