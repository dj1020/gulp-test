var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var sass   = require('gulp-ruby-sass');

gulp.task('scripts', function () {
    gulp.src('js/*')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function () {
    gulp.src('sass/**/*.sass')
        .pipe(sass({
            style: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/*.sass', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);

