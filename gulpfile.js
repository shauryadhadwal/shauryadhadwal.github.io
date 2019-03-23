const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//Compile scss to css

function style() {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/styles'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        port: 3000
    });
    gulp.watch('./styles/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;