var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    flatten = require('gulp-flatten'),
    config = require('../config')();

gulp.task('scripts-bundle', function () {

    //map files
    gulp.src(config.scriptsMaps)
    .pipe(flatten())
    .pipe(gulp.dest(config.scriptsTarget))

    //js files 
    gulp.src(config.scripts)
    .pipe(gulp.dest(config.scriptsTarget))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.scriptsTarget))

    //create bundle
    gulp.src(config.scripts)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.scriptsTarget))
    
    gulp.src(config.scripts)
    .pipe(concat('site-bundle.js'))
    .pipe(gulp.dest(config.scriptsTarget))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(config.scriptsTarget));
});

/*  gulp watch tasks */
gulp.task('watch-scripts', ['scripts-bundle'], function () {
    gulp.watch(config.scriptsWatch, ['scripts-bundle']);
});