var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');
var cleanCSS = require('gulp-clean-css');
var rupture = require('rupture');

gulp.task('styles', function(){
    gulp.src('sources/css/**/*.styl')
        .pipe(stylus({
            use: [typographic(), nib(), rupture()]

        }))
        .pipe(gulp.dest('sources/css/'));
});

gulp.task('watch:styles', function(){
    gulp.watch('sources/css/**/*.styl', ['styles']);
});


gulp.task('minify-css', function() {
    return gulp.src('sources/css/style.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('min_css/'));
});

gulp.task('default', ['styles', 'watch:styles', 'minify-css']);
