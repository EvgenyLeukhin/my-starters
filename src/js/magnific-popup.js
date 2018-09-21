/*-----------------------------------------------
    MAGNIFIC POPUP (http://dimsemenov.com/plugins/magnific-popup/)
-----------------------------------------------*/

// Обычный текстовый поп-ап
$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true
});


// ПОПАП-ИЗОБРАЖЕНИЕ
$('.image-link').magnificPopup({type:'image'});


// YouTube-ФРЕЙМ
$('.popup-youtube').magnificPopup({ // .popup-content   .popup-img   .popup-youtube
  type: 'iframe',                   // inline, image, iframe, ajax
  alignTop: false,                  // выравнивание по верху
  closeBtnInside: true,             // кнопка закрыть внутри окна
  closeOnBgClick: true,             // закрыть по клику на тёмный фон
});


// ФОТО-галерея
$('.popup-gallery').magnificPopup({
  delegate: 'a',               // открываем п ссылке
  type: 'image',               // картинки
  titleSrc: 'title',           // подпись картинки в title у ссылки
  tLoading: 'Загрузка изображения #%curr%...',
  gallery: {
    enabled: true,             // галерея
    navigateByImgClick: true,  // клик по картинки - next
    preload: [0, 1],           // Will preload 0 - before current, and 1 after the current image
    tPrev: 'Предыдущая',       // title for left button
    tNext: 'Следущая',         // title for right button
  }
});
