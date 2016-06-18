import { browsersync as config } from '../gulp.config';
import browsersync from 'browser-sync';
import gulp from 'gulp';

gulp.task('browsersync:src', () => {
    browsersync(config.src);
});

gulp.task('browsersync:dist', () => {
    browsersync(config.dist);
});