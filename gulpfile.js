var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('scripts', function () {
    gulp.src('js/*')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function () {
    console.log('runs styles');
});

gulp.task('watch', function () {
    gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'styles']);

