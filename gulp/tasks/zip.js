import config from '../gulp.config';
import gulp from 'gulp';
import zip from 'gulp-zip';

gulp.task('zip', () => {
    return gulp.src([config.zip.dist.base])
        .pipe(zip(config.zip.filename))
        .pipe(gulp.dest(config.zip.dest.base))
});