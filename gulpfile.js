var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('app/js/app.js', {read:false})
        .pipe(browserify({
          insertGlobals : true,
          debug : true,
        }))
        .pipe(gulp.dest('./dist/js/'))
});
gulp.task('copy', function () {
	gulp.src(['/app/**/*.html'])
	.pipe(gulp.dest('./dist/')) 
});
