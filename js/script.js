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
});
