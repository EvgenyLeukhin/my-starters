/*-----------------------------------------------
    OWL-CAROUSEL (https://owlcarousel2.github.io/OwlCarousel2/)
-----------------------------------------------*/

$('.owl-carousel').owlCarousel({
  loop: true, // зацикливание при пролистывании конец-начало
  margin: 0, // отступ (margin-right)
  nav: true, // prev и next
  dots: true, // точки
  merge: true, // ???
  autoHeight: true, // адаптивен по высоте
  // lazyLoad: true, // анимация
  // animateOut: 'fadeOut', // анимация
  video: true, // видео
  // stagePadding: 30, // padding-left контейнера
  // center: true, // начинать с центра
  mouseDrag: true, // перелистывание мышью
  touchDrag: false, // на мобиле
  // адаптивность (ширина-кол-во слайдов)
  responsive: {
    480: {
      items: 1
    },
    700: {
      items: 2
    },
    1000: {
      items: 1
    }
  },
  // autoplay
  autoplay: false,
  autoplayTimeout: 5000,
  autoplayHoverPause: false

  // responsive:{
  //     0:{ items:1 }, // 1 слайд
  //   600:{ items:3 }, // 3 слайда от 600px
  //  1000:{ items:5 }  // 5 слайдов от 1000px
  // }

});
