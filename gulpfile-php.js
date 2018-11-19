// Плагины:
const gulp = require('gulp'),
  browserSync = require('browser-sync'),
  cache = require('gulp-cache'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer'),
  postcss = require('gulp-postcss'),
  mqpacker = require('css-mqpacker'),
  csscomb = require('gulp-csscomb');


// LESS
gulp.task('scss', () => {
  return gulp.src('./assets/style.scss')
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
      mqpacker({ sort: true })
    ]))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({ stream: true }));
});


// BROWSER-SYNC 
gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'fe-cosmik.loc'
  });
});

// CLEAR cache 
gulp.task('clear', () => {
  return cache.clearAll();
});

gulp.task('del', () => {
  return del.sync('./style.css');
});


// WATCH 
gulp.task('default', ['clear', 'del', 'scss', 'browser-sync'], function () {
  gulp.watch('./assets/**/*.scss', ['scss'], browserSync.reload);
  gulp.watch('./**/*.php', browserSync.reload);
});
