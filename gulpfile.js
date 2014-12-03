var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var sass   = require('gulp-ruby-sass');
var livereload   = require('gulp-livereload');

function errroLog (error) {
    console.error.bind(error);
    this.emit('end');
}

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
        .on('error', errroLog)
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    var server = livereload(); // start a livereload server
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('sass/**/*.sass', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);

