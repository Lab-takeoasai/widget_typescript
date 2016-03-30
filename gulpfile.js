var gulp = require('gulp');
var plumber = require('gulp-plumber');
var typescript = require('gulp-typescript');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');

var typescriptProject = typescript.createProject({
  target: "ES5", 
  removeComments: true, 
  sortOutput: true
});

var paths = {
    ts: ['src/**/*.js']
};

gulp.task('build', function(done) {
    gulp.src(paths.ts)
    .pipe(plumber({errorHandler: notify.onError('Error: typescript build')}))
    .pipe(typescript(typescriptProject))
    .pipe(webpack({output: {
        filename: 'main.js',
      }}))
    .pipe(gulp.dest('./build'))
    .on('end', done);
});