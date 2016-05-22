var gulp = require('gulp'),
    clean = require('gulp-rimraf'),
    config = require('../config')();


gulp.task('cleanup-files', function () {
    gulp.src([
                config.stylesTarget,
                config.imagesTarget,
                config.libsTarget,
                config.scriptsTarget
            ])
    .pipe(clean());

});


