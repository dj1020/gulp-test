var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var sass   = require('gulp-ruby-sass');
var plumber = require('gulp-plumber');

gulp.task('scripts', function () {
    gulp.src('js/*')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function () {
    gulp.src('sass/**/*.sass')
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/*.sass', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);

