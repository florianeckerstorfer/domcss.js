var gulp        = require('gulp'),
    concat      = require('gulp-concat')
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglifyjs');

var scripts = [
    './src/module-pre.js',
    './src/domcss.js',
    './src/module-post.js'
];

gulp.task('default', ['build']);
gulp.task('build', ['js-build']);
gulp.task('dist', ['js-dist']);

gulp.task('js-dist', function () {
    gulp.src(scripts)
        .pipe(concat('domcss.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(uglify('domcss.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('js-build', function () {
    gulp.src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('domcss.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build'));
});
