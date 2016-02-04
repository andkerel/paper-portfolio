require('es6-promise-min').polyfill();

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    stylish = require('jshint-stylish'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-ruby-sass'),
    rename = require("gulp-rename");


//DEV
gulp.task('hint-concat', function () {
    return gulp.src('./js/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('sass', function () {
    return sass('./scss/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('./css'));
});

gulp.task('autopre', function() {
    return gulp.src('./css/*.css')
    .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE 8', 'IE 9', 'IE 10'],
            cascade: false
        }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass', 'autopre']);
    gulp.watch('./js/src/*.js', ['hint-concat']);
});


//DIST
gulp.task('js-dist', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass-dist', function() {
    return sass('./scss/*.scss', {
            style: 'compressed'
        })
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('dist', ['js-dist', 'sass-dist', 'autopre']);

gulp.task('default', ['hint-concat', 'sass', 'autopre', 'watch']);

