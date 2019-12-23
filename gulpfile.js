const gulp = require('gulp')
gulp.task('lib', function() {
    return gulp.src('./src/lib/**/*.*').pipe(gulp.dest('./dist/lib'))
})