$(document).ready(function() {
  // For Auxiliary Menu
  var showAuxiliaryMenu = $('.services').offset();
  $(window).scroll(function(){
    if ( $(window).width() > 768) {
      if ($(window).scrollTop() > showAuxiliaryMenu.top - 150) {
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

  // Counter for Facts
  $('.facts-statistic').countUp({
    'time': 2000,
    'delay': 10
  });
})
