
/* Gulp requirements */
var gulp = require('gulp'),
 sass = require('gulp-sass'),
 sourcemaps = require('gulp-sourcemaps'),
 concat = require('gulp-concat'),
 rename = require('gulp-rename'),
 config = require('../config')();


//css files contcat, minified and source map
gulp.task('styles-bundle', function () {

    gulp.src(config.styles)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sassOptionsCompressed).on('error', sass.logError))
    .pipe(concat('site-bundle.css'))
    .pipe(gulp.dest(config.stylesTarget))
    .pipe(sourcemaps.write('./'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.stylesTarget))

});

/*  gulp watch tasks */
gulp.task('watch-styles', ['styles-bundle'], function () {
    gulp.watch(config.stylesWatch, ['styles-bundle']);
});