import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { images as config } from '../config';
import { errorHandler } from '../util/handleError';

const $ = gulpLoadPlugins();

class Images {

    // Build images
    static build() {

        return gulp.src(config.src.base)
            .pipe($.plumber({errorHandler: errorHandler}))
            .pipe($.imagemin())
            .pipe(gulp.dest(config.dist.base))
    }
}

export default Images;