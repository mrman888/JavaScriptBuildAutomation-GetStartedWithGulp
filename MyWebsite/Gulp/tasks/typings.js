/// <binding ProjectOpened='watch-tsd' />

//http://dinozafirakos.com/2014/07/07/automating-retrieval-of-typescript-definition-files/
var gulp = require('gulp'),
    typings = require('gulp-typings'),
    config = require('../config')();

gulp.task('typings', function () {
    gulp.src("./typings.json")
       .pipe(typings()); //will install all typings files in pipeline.
});

/*  gulp watch tasks for typescript typings*/
gulp.task('watch-typings', ['typings'], function () {
    gulp.watch("./typings.json", ['typings']);
});
