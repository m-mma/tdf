'use strict';

var gulp = require('gulp');
var gulpwatch = require('gulp-watch');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var terser = require('gulp-terser');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var swPrecache = require('sw-precache');
var inlinesource = require('gulp-inline-source');


//Watch for 'Ctrl + C' on Windows and end gulp process
if (process.platform === "win32") {
  require("readline")
    .createInterface({
      input: process.stdin,
      output: process.stdout
    })
    .on("SIGINT", function() {
      process.emit("SIGINT");
    });
}
process.on("SIGINT", function() {
  process.exit();
});

// Start CSS tasks
gulp.task('css-tasks', done => {
  gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css/'))
  done();
});
// End CSS tasks

// Start JS tasks
gulp.task('js-scripts', done => {
  gulp.src([
      // 'src/js/jquery-3.3.1.min.js',
      'src/js/test-a.js',
      'src/js/test-b.js'
    ])
    .pipe(concat('all-js-min.js'))
    .pipe(terser())
    .pipe(gulp.dest('js/'))
  done();
});
// End JS tasks


// Start HTML minify task
gulp.task('html-minify', done => {
  return gulp.src(['src/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      // removeEmptyElements: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('./'));
  done();
});
// end HTML minify task


// Start image minify task
gulp.task('image-minify', () =>
  gulp.src('src/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({
      interlaced: true
    }),
    imagemin.jpegtran({
      progressive: true
    }),
    imagemin.optipng({
      optimizationLevel: 5
    }),
  ]))
  .pipe(gulp.dest('images/'))
);
// End  image minify task

// Start service worker precache
gulp.task('generate-sw', function(callback) {
  var path = require('path');
  // var swPrecache = require('sw-precache');
  var rootDir = './';

  swPrecache.write(`service-worker.js`, {
    // staticFileGlobs: [rootDir + '/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff}'],
    staticFileGlobs: [
      // './**.html',
      // 'css/main.css',
      'css/fonts/**.*'
      // 'images/site-icons/**.*',
      // 'images/static_images/**.*'
    ],
    // stripPrefix: rootDir

  }, callback);

});

// End service worker precache

// Start watch task
gulp.task('default', done => {
  gulp.watch('src/js/*.js', gulp.series('js-scripts'));
  gulp.watch('src/sass/**/*.scss', gulp.series('css-tasks'));
  gulp.watch('src/*.html', gulp.series('html-minify'));
  gulp.watch('src/images/**/*.*', gulp.series('image-minify'));
  // gulp.watch( 'dist', gulp.series('generate-sw'));
  done();
});