// partner logo 
$('.my-class').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerPadding: '10px',
    autoplaySpeed: 1000,

    responsive: [
        {
            breakpoint: 1365,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                centerPadding: '5px',
                autoplaySpeed: 1000,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                centerPadding: '5px',
                autoplaySpeed: 1000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                centerPadding: '5px',
                autoplaySpeed: 1000,
            }
        }
    ]
});

// service slick slider 
$('.my-slick-parent').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev btn fs-2 translate-middle"><i class="bi bi-arrow-left-short"></i></button>',

    nextArrow: '<button type="button" class="slick-next btn fs-2 rounded-circle translate-middle"><i class="bi bi-arrow-right-short"></i></button>',
    responsive: [
        {
            breakpoint: 1365,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                centerPadding: '5px',
                autoplaySpeed: 1000,
            }
        }
    ]
});

// special offer and shakkhat activities
$('.offer-slick-parent').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 5,
    prevArrow: '<button type="button" class="slick-prev btn fs-2 translate-middle"><i class="bi bi-arrow-left-short"></i></button>',

    nextArrow: '<button type="button" class="slick-next btn fs-2 rounded-circle translate-middle"><i class="bi bi-arrow-right-short"></i></button>',
    responsive: [
        {
            breakpoint: 1365,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                arrows: false,
                centerPadding: '5px',
                autoplaySpeed: 1000,
            }
        }
    ]
});