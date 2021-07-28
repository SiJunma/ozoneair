$('.header-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
});

$('.product-main__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
});

$('.js-navbar__burger-btn').click(evt => {
    evt.preventDefault();
    $('.js-navbar__primary-menu').fadeToggle();
});

let toggle = $(window).width() < 576;
$(window).on('resize', function (event) {

    if ($(window).width() >= 576 && toggle) {
        $('.js-navbar__primary-menu').hide().fadeIn(1000);
        toggle = false;
    } else if ($(window).width() < 576 && !toggle) {
        $('.js-navbar__primary-menu').hide().fadeOut(1000);
        toggle = true;
    }
});