$(document).ready(function() {
  // For Auxiliary Menu
  var showAuxiliaryMenu = $('.services').offset();
  $(window).scroll(function(){
    if ($(window).scrollTop() > showAuxiliaryMenu.top - 150) {
      $('.auxiliary-menu').addClass('show');
    } else {
      $('.auxiliary-menu').removeClass('show');
    }
  });

  $('.facts-statistic').countUp({
    'time': 2000,
    'delay': 10
  });
})
