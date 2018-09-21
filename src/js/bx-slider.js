/*-----------------------------------------------
    BX-slider (https://bxslider.com/options/)
-----------------------------------------------*/
$('.bxslider').bxSlider({
  slideWidth: 1920,
  auto: true,
  speed: 500, // transition speed
  autoControls: true,
  stopAutoOnClick: true,
  adaptiveHeight: true,
  pager: true, // dots
  mode: 'fade', // animation
  captions: true, // <img title="">
  controls: true, // arrows
  touchEnabled: true, // touch
  pagerCustom: '#bx-pager', // для миниатюр
});
// mode: 'fade',            // анимация
// speed: 500,              // скорость смены слайдов
// responsive: true,        // адптивность на увеличение

// infiniteLoop: true,      // бесконечный цикл при auto
// hideControlOnEnd: false, // прятать стрелку на последнем слайде
// adaptiveHeight: true,    // адаптивность по высоте img
// // slideWidth: 1920,        // ширина слайдов, будет адаптивен при уменьшении экрана, но если каринка меньше в px, то будут отступы (в идеале должно совпадать с шириной img)

// // если нужна лента из слайдов (с 'fade' не работает)
// // slideWidth: 400, // ширина одного слайда (будет уменьшаться, если из-за большой ширины не вмещается)
// minSlides: 2,
// // maxSlides: 3,
// // moveSlides: 3, // сколько перемещать
// // slideMargin: 10,
// // pause: 3000, // пауза между слайдами

// // pagerCustom: '#bx-pager', // для миниатюр
// // ticker: true,             // прокрутка равномерная (с 'fade' не работает)
// video: true, // для iframe
// useCSS: false,
//
