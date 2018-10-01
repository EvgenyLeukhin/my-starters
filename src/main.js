// FONTS
import './fonts/Shentox-Regular.woff';
import './fonts/Shentox-Regular.ttf';
import './fonts/Shentox-Semibold.woff';
import './fonts/Shentox-Semibold.ttf';

// CSS
import './style.scss';

// JS-LIBS
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

// jQuery-example
$(document).ready(() => {
  $('body').css('background', '#dff');
});


var a = () => {
  console.log('Hello Babel');
};

