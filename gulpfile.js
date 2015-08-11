/* File: gulpfile.js */

// grab our gulp packages
var gulp   = require('gulp'),
	jshint = require('gulp-jshint'),
    gutil  = require('gulp-util');

// define the default task and add other tasks to it
gulp.task('default', ['copyJS']);

// copy JS files from bower_components to js folder
gulp.task('copyJS', function() {
	gulp.src('bower_components/backbone/backbone-min.js').pipe(gulp.dest('js'));
	gulp.src('bower_components/jquery/dist/jquery.min.js').pipe(gulp.dest('js'));
	gulp.src('bower_components/underscore/underscore.min.js').pipe(gulp.dest('js'));
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['jshint']);
});