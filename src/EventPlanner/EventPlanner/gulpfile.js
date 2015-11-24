var gulp = require('gulp'),
    del = require('del'),
    bower = require('gulp-bower'),
    mainBowerFiles = require('main-bower-files'),
    changed = require('gulp-changed');

var paths = {
    bower: "./bower_components/",
    npm: "./node_modules/",
    content: "./Content/",
    lib: "./Scripts/lib/",
    app: "./Scripts/app/",
    the_app: "./Scripts/app/the_app/",
    css: "./Content/css/"
};

gulp.task('bower-install', function () {
    return bower({ cmd: 'install' });
});

gulp.task('bower-files', ['bower-install'], function() {
    return gulp.src(mainBowerFiles(), { base: paths.bower })
        .pipe(changed(paths.lib))
        .pipe(gulp.dest(paths.lib));
});

gulp.task('default', ['bower-files'], function () { });