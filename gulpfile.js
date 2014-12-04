var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');

gulp.task('test', function () {
    console.log("TEST gulp");
});

gulp.task('styles', function () {
    gulp.src("sass/**/*.sass")
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(gulp.dest("css"));
});

gulp.task('scripts', function () {
    gulp.src("coffee/**/*.coffee")
        .pipe(coffee())
        // .pipe(uglify())
        .pipe(gulp.dest("js"));
});

gulp.task('watch', function() {
    gulp.watch('coffee/**/*.coffee', ['scripts']);
    gulp.watch('sass/**/*.sass', ['styles']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);
