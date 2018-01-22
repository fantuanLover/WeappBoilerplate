var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var watch = require('gulp-watch');

gulp.task('compile', () => {
    return watch(['./src/**/*.js'], { ignoreInitial: false })
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('scripts', () => {
    return gulp.src(['./src/**/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', () => {
    return gulp.src('./src/**/*.wxss')
        .pipe(gulp.dest('./dist'));
});

gulp.task('xml', () => {
    return gulp.src('./src/**/*.wxml')
        .pipe(gulp.dest('./dist'));
});

gulp.task('json', () => {
    return gulp.src('./src/**/*.json')
        .pipe(gulp.dest('./dist'));
});

gulp.task('jpg', () => {
    return gulp.src('./src/**/*.jpg')
        .pipe(gulp.dest('./dist'));
});

gulp.task('png', () => {
    return gulp.src('./src/**/*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch-css', () => {
    return watch('./src/**/*.wxss')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch-xml', () => {
    return watch('./src/**/*.wxml')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch-json', () => {
    return watch('./src/**/*.json')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch-jpg', () => {
    return watch('./src/**/*.jpg')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch-png', () => {
    return watch('./src/**/*.png')
        .pipe(gulp.dest('./dist'));
});

gulp.task("clean", function() {
    return gulp.src('./dist')
        .pipe(clean());
});

gulp.task('res', ['css', 'xml', 'json', 'jpg', 'png']);


gulp.task('build', ['clean'], function() {
    gulp.start( 'scripts', 'res');
});

gulp.task('watch', [
    'watch-css',
    'watch-xml',
    'watch-json',
    'watch-jpg',
    'watch-png',
    'compile',
]);