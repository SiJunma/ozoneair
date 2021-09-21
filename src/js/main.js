$( document ).ready(function() {

  $('.partners-section__list').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 526,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 412,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
    
  });

  $('.product-page__presentation-single-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    swipe: false,
    infinite: false,
    arrows: false,
    
  });

  $('.product-page__presentation-navigation-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: false,
    arrows: false,
    vertical: true,
    swipeToSlide: true,
    verticalSwiping: true,
    focusOnSelect: false,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          verticalSwiping: false,
          vertical: false,
        }
      },

      {
        breakpoint: 465,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          verticalSwiping: false,
          vertical: false,
        }
      },

      {
        breakpoint: 369,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          verticalSwiping: false,
          vertical: false,
        }
      },
    ]
  });

  $('.product-page__presentation-navigation-slider .slick-slide').on('click', function (event) {
    $('.product-page__presentation-navigation-slider .slick-slide').removeClass('active');
    $(this).addClass('active');
    $('.product-page__presentation-single-slider').slick('slickGoTo', $(this).data('slickIndex'));
 });

  $('.trigger-cards__slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      variableWidth: true,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      focusOnSelect: true,

      responsive: [
          {
            breakpoint: 1200,
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
  });
  
  $('.header-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
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

  //btn open popup
  function btnPopup (btn) {
    $(btn).on('click', function (event) {
      event.preventDefault();

      let target = event.target.getAttribute('data-target');
      $(target).fadeIn();
      $('body').addClass('fixed');
    });
  }
  btnPopup('.js-btn-popup');

  //btn-close close popup
  function btnClose(btn) {
    $(btn).on('click', function (event) {
      event.preventDefault();

      let target = event.target.closest('.popup');
      $(target).fadeOut();
      $('body').removeClass('fixed');
    });
  };
  btnClose('.popup__close');


  //spoiler-open on checkout
  function btnSpoiler(btn) {
    $(btn).on('click', function (event) {
      event.preventDefault();
      let target = event.target.closest('.shopping-cart__spoiler-title');
      $(target).toggleClass('opened');
      $(target.getAttribute('data-target')).toggleClass('opened');
    });
  };
  btnSpoiler('.js-spoiler-btn');

});

