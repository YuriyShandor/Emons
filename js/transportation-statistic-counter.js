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
