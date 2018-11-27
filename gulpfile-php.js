//  Windows http://fe-cosmik.loc/
//    MacOS http://localhost:8888/
const localUrl = 'http://localhost:8888/',
     themePath = './wp-content/themes/cosmik/',

  gulp         = require('gulp'),
  browserSync  = require('browser-sync'),
  cache        = require('gulp-cache'),
  plumber      = require('gulp-plumber'),
  sass         = require('gulp-sass'),
  del          = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  postcss      = require('gulp-postcss'),
  mqpacker     = require('css-mqpacker'),
  csscomb      = require('gulp-csscomb');

// SASS
gulp.task('scss', () => {
  return gulp.src(`${themePath}assets/style.scss`)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer([
      'last 15 versions',
      '> 1%',
      'ie 8',
      'ie 7'
    ], {
      cascade: true
    }))
    .pipe(csscomb())
    .pipe(postcss([
      mqpacker({ sort: false }) // have problems with cascading (sort: false)
    ]))
    .pipe(gulp.dest(themePath))
    .pipe(browserSync.reload({ stream: true }));
});


// BROWSER-SYNC 
gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: localUrl
  });
});

// CLEAR cache 
gulp.task('clear', () => {
  return cache.clearAll();
});

// DELETE style.css
gulp.task('del', () => {
  return del.sync(`${themePath}/style.css`);
});


// WATCH 
gulp.task('default', ['clear', 'del', 'scss', 'browser-sync'], () => {
  gulp.watch(`${themePath}assets/**/*.scss`, ['scss'], browserSync.reload);
  gulp.watch(`${themePath}**/*.php`, browserSync.reload);
  gulp.watch(`${themePath}**/*.html`, browserSync.reload);
});






// package.json
// "devDependencies": {
//     "browser-sync": "^2.26.3",
//     "css-mqpacker": "^7.0.0",
//     "del": "^3.0.0",
//     "gulp": "^3.9.1",
//     "gulp-autoprefixer": "^6.0.0",
//     "gulp-cache": "^1.0.2",
//     "gulp-csscomb": "^3.0.8",
//     "gulp-plumber": "^1.2.0",
//     "gulp-postcss": "^8.0.0",
//     "gulp-rename": "^1.4.0",
//     "gulp-sass": "^4.0.2"
//   }
