import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { fonts as config } from '../config';
import { errorHandler } from '../util/handleError';

const $ = gulpLoadPlugins();

class Fonts {

    // Build fonts
    static build() {

        return gulp.src(config.src.base)
            .pipe($.plumber({errorHandler: errorHandler}))
            .pipe(gulp.dest(config.dist.base));
    }
}

export default Fonts;