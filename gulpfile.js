// gulpfile.js
const { src, dest, series, watch, parallel } = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');

const files = {
  scssPath: 'scss/**/*.scss',
}

function scssTask() {
  return src(files.scssPath)
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('assets/'));
}

function watchTask() {
  watch([files.scssPath], parallel(scssTask));
}

exports.default = series(parallel(scssTask), watchTask);
exports.scssTask = series(scssTask);