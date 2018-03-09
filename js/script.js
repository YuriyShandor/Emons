$(document).ready(function() {
  // Header menu
  $('.menu-icon').on('click', function() {
    $('.header-nav').toggleClass('header-nav_show');
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
  $('.video-presentatio__btn').click(function() {
    $('.video-presentation').addClass('show');
  })
  $('.tv-image_close').click(function() {
    $('.video-presentation').removeClass('show');
  })
});
