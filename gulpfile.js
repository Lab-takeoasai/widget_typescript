var gulp = require('gulp');
var plumber = require('gulp-plumber');
var typescript = require('gulp-typescript');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');


var typescriptProject = typescript.createProject({
  target: "ES5", 
  removeComments: true, 
  sortOutput: true
});

var paths = {
    ts: ['src/**/*.ts']
};

gulp.task('build', function(done) {
    gulp.src(paths.ts)
    .pipe(plumber({errorHandler: notify.onError('Error: build')}))
//    .pipe(typescript(typescriptProject))
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build'))
    .on('end', done);
});