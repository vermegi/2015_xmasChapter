var gulp = require('gulp'),
    del = require('del'),
    bower = require('gulp-bower'),
    mainBowerFiles = require('main-bower-files'),
    changed = require('gulp-changed'),
    jasmine = require('gulp-jasmine-browser'),
    watch = require('gulp-watch')
    Server = require('karma').Server;

var paths = {
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
    return gulp.src(mainBowerFiles())
        .pipe(changed(paths.lib))
        .pipe(gulp.dest(paths.lib));
});

var filesfortest = ['jasmine/src/**/*.js', 'jasmine/spec/**/*.js'];

gulp.task('test', function() {
    return gulp
        .src(filesfortest)
        .pipe(jasmine.specRunner({console:true}))
        .pipe(jasmine.headless());
});

gulp.task('watch', function() {
    gulp.watch(filesfortest, ['test']);
});

gulp.task('ktest', function(done) {
    return new Server({
        configFile: __dirname + '/karma.conf.js'//,
        //singleRun: true
    }, done).start();
});

gulp.task('default', ['bower-files'], function () { });