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

  // Counter for Rolling Stock
  var stockStatisticCounterStart = 0;
  $(window).scroll(function() {
    var oTop = $('.stock__statistic').offset().top - window.innerHeight;
    if (stockStatisticCounterStart == 0 && $(window).scrollTop() > oTop) {
      $('.stock__statistic-amount').each(function () {
        $(this).prop('Counter',0).animate({
        Counter: $(this).text()
        },
        {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
          $(this).text(Math.ceil(now));
        }
        });
      });
      stockStatisticCounterStart = 1;
    }
  });
});
