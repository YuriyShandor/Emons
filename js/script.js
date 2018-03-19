$(document).ready(function() {
  // Header menu
  $( '.menu-icon' ).mousemove(function( event ) {
    if ( $(window).width() > 1199) {
      $('.header-nav').addClass('header-nav_show');
    }
  });
  $('body').click(function() {
    $('.header-nav').removeClass('header-nav_show');
  })
  $('.menu-icon').on('click', function() {
    if ( $(window).width() < 1199) {
      $('.header-nav').toggleClass('header-nav_show');
    }
  });


  // For Auxiliary Menu
  $(window).scroll(function(){
    if ( $(window).width() > 768) {
      if ($(window).scrollTop() > 100) {
        $('.auxiliary-menu').addClass('show');
      } else {
        $('.auxiliary-menu').removeClass('show');
      }
    }
  });

  $('.show-ax-menu__btn').on('click', function() {
    $(this).toggleClass('active');
    $('.auxiliary-menu').toggleClass('show_mobile');
  });

  // Trasted slider
  $(".trasted-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: $(".trasted-slider__nav_next"),
    prevArrow: $(".trasted-slider__nav_prev"),
    autoplay: true,
   autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Btn to top
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#btnToTop').addClass('show');
    } else {
      $('#btnToTop').removeClass('show');
    }
  });

  $('#btnToTop').click(function(){
    $('html, body').animate({
      scrollTop : 0
    },750);
    return false;
  });

  // Show Footer
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 3 > $(document).height()) {
      $('.footer').addClass('show_scroll');
    } else {
      $('.footer').removeClass('show_scroll');
    }
  });

  $('.footer-btn_show').on('click', function() {
    $('.footer').toggleClass('show_click');
  });

  // For vacancy modal window
  $('.vacancy__interest').click(function() {
    $('.modal-form').addClass('modal-form_show');
  })
  $('.modal-form_close').click(function() {
    $('.modal-form').removeClass('modal-form_show');
  })

  // For Articles Filter
  $('.articles-filter__toggler-icon').on('click', function() {
    $('.articles__filter-categories').toggleClass('articles__filter-categories_show');
  });
  $('.articles__filter-categories li:first-child').addClass('active');
  $('.articles__filter-categories li').click(function() {
    $('.articles__filter-categories li').removeClass('active');
    $(this).addClass('active');
  })

  // For Video Presentation Window
  $('.video-presentation').fadeOut();
  $('.video-presentatio__btn').mousemove(function() {
    $('.video-presentation').fadeIn();
  })
  $('.tv-image_close').click(function() {
    $('.video-presentation').fadeOut();
  })
});
