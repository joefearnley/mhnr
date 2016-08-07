var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

gulp.task('default', ['build_libs'], function() {
    console.log('Running gulp.')
});

gulp.task('build_libs', function() {
    gulp.src([
        'bower_components/Framework7/dist/js/framework7.min.js',
        'bower_components/vue/dist/vue.min.js',
        'bower_components/vue-resource/dist/vue-resource.min.js'
    ])
    .pipe(gulp.dest('js'));

    gulp.src([
        'bower_components/Framework7/dist/css/framework7.ios.min.css',
        'bower_components/Framework7/dist/css/framework7.ios.colors.min.css'
    ])
    .pipe(gulp.dest('css'));
});
