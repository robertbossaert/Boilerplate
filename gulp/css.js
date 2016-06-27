import { css as config } from '../gulp.config';
import autoprefixer from 'autoprefixer';
import { reload } from 'browser-sync';
import gulp from 'gulp';
import filter from 'gulp-filter';
import minifyCss from 'gulp-minify-css';
import postcss from 'gulp-postcss';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import watch from 'gulp-watch';

gulp.task('css', () => {
    var processors= [
        autoprefixer({
            browsers: config.autoprefixer.browsers
        })
    ];
    return gulp.src(config.src.base)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(minifyCss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist.base))
        .pipe(filter('**/*.css'))
        .pipe(reload({ stream: true }));
});

gulp.task('css-watch', () => {
    watch([config.src.base], () => gulp.start(['css']));
});
