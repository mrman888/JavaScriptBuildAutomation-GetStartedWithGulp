/// <binding AfterBuild='moveToLibs' />

var gulp = require('gulp'),
    config = require('../config')();

gulp.task('copy-files', function () {
    //external libraries
    gulp.src(config.libs.jquery)
   .pipe(gulp.dest(config.libs.jqueryTarget));

    gulp.src(config.libs.jquery_validation)
   .pipe(gulp.dest(config.libs.jquery_validationTarget));

    gulp.src(config.libs.jquery_validation_unobtrusive)
   .pipe(gulp.dest(config.libs.jquery_validation_unobtrusiveTarget));

    //images
    gulp.src(config.images)
    .pipe(gulp.dest(config.imagesTarget));

});


