$(document).ready(() => {
  $('body').css('background', 'lightgray');

  // bxslider
  $('.bxslider').bxSlider({
    auto: true,
    speed: 500,
    controls: true, // arrows
    pager: true, // dots
    adaptiveHeight: true,
  });

});
