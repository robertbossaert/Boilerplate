import { clean as config } from '../gulp.config';
import del from 'del';
import gulp from 'gulp';

gulp.task('clean', () => del.sync(config.dist.base));