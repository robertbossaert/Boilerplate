import { img as config } from '../gulp.config';
import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import watch from 'gulp-watch';

gulp.task('img', () => {
    return gulp.src(config.src.base)
        .pipe(changed(config.dist.base))
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist.base));
});

gulp.task('img-watch', () => {
    watch([config.src.base], () => gulp.start(['img']));
});