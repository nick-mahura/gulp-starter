const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass');

function copyHtml() {
  return src('*.html')
    .pipe(dest('public/'));
}

function copyCss() {
  return src('./css/*.css')
    .pipe(dest('public/css/'));
}

function sassCompile() {
  return src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./css'));
}

function watching() {
   watch('./*.html').on('change', copyHtml);
   watch('./scss/*.scss').on('change', sassCompile, copyCss);
}

exports.default = series(copyHtml, sassCompile, watching);