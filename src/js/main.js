$( document ).ready(function() {

    $('.nav-product-tab__tabs').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        variableWidth: true,

        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
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

    $('.js-hdiw-section__btn-more').click(evt => {
        evt.preventDefault();
        $('.js-additional-section').fadeIn();
    });

    $('.js-guide-title-section__close-btn').click(evt => {
        evt.preventDefault();
        $('.js-additional-section').fadeOut();
    });
    
    //ACCORDEON

    $(".custom-accordion__btn").on("click", function(e) {
    
        e.preventDefault();
        var $this = $(this);

        if (!$this.hasClass("active")) {
            $(".custom-accordion__panel").slideUp(400);
            $(".custom-accordion__btn").removeClass("active");
        }

        $this.toggleClass("active");
        $this.next().slideToggle();
        
    });
    
    // Taps for product page
    $('.nav-product-tab__btn').on('click', function (event) {
        event.preventDefault();
        
        $('.nav-product-tab__btn').removeClass('active');
        $(this).addClass('active');
        $('.nav-product-content').hide();
        $($(this).attr('href')).fadeIn();
    });

    // $('.nav-product-tab__tabs li:first-child a').trigger('click'); // Default

});

