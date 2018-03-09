// For Auxiliary Menu
var showAuxiliaryMenu = $('.services').offset();
$(window).scroll(function(){
  if ($(window).scrollTop() > showAuxiliaryMenu.top - 150) {
    $('.auxiliary-menu').addClass('show');
  } else {
    $('.auxiliary-menu').removeClass('show');
  }
});
