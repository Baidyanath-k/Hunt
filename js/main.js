$(function () {

    $('.venobox').venobox();


    //End of full_portfolio

    $('.banner_all_slick').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        fade: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
        nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });



    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-up slidPrv3" style="line-height: 2;"></i>',
        nextArrow: '<i class="fa fa-chevron-down slidNext3" style="line-height: 2;"></i>',
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 500,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
		},
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		}
	  ]
    });
    
    
    $('.test_slider_img').slick({
       slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<i class="fa fa fa-chevron-up slidPrv" style="line-height: 2;"></i>',
        nextArrow: '<i class="fa fa-chevron-down slidNext" style="line-height: 2;"></i>',
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        asNavFor: '.testimonial_text-slider',
        speed: 400,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    
    
    $('.testimonial_text-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay:false,
        fade: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.test_slider_img',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });
    
    $('.counter').counterUp({
    delay: 20,
    time: 2000
});

});