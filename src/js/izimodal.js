/*-----------------------------------------------
  IZI-MODAL (http://izimodal.marcelodolce.com/)
-----------------------------------------------*/

// Настройка - ПРОСТОЕ МОДАЛЬНОЕ ОКНО
$('#js-modal-1').iziModal({
  padding: 30,
  // closeButton: false,
  // iconColor: '#000',
  // width: 400,
  // borderBottom: false,
  // radius: 15,
  title: 'Hello, World!',
  // headerColor: '#fff'
});


// ПРОСТОЕ МОДАЛЬНОЕ ОКНО
$(document).on('click', '.js-modal-1', function (e) {
  e.preventDefault();
  $('#js-modal-1').iziModal('open');
});


// IFRAME-group
$('.modals-group-frame').iziModal({
  history: false,
  iframe: true,
  fullscreen: true,
  headerColor: '#000000',
  bgColor: '#000',
  group: 'group1',
  loop: true
});
