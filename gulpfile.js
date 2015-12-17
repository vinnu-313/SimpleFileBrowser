var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;


var ngAnnotate = require('gulp-ng-annotate');
 
gulp.task('default', function () {
	return gulp.src('js/**/*.js')
		.pipe(ngAnnotate())
		.pipe(gulp.dest('dist'));
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: ['app', 'bower_components']
    }
  });

  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'app'}, reload);
});
