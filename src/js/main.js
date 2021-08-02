$( document ).ready(function() {

    $('.trigger-cards__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        variableWidth: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
              breakpoint: 1200,
              centerMode: true,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    });

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

    $('.product-page-specs__tabs-btns__slider').slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      variableWidth: true,

      responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          
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

    //for nav-menu toggle-appear when resize
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
    
    // Tabs for product landing page
    tabs('.nav-product-tab__btn', '.nav-product-content');

    // Tabs for product page
    tabs('.product-page-specs__tabs-btn', '.product-page-specs__tabs-content__panel');

    //custom-tabs
    function tabs (btn, panel) {
      $(btn).on('click', function (event) {
        event.preventDefault();
        
        $(btn).removeClass('active');
        $(this).addClass('active');
        $(panel).removeClass('active');
        $($(this).attr('href')).addClass('active');
      });
    }

});

