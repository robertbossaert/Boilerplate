import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { deploy as config } from '../config';
import { errorHandler } from '../util/handleError';

class Deploy {

    static run() {

        return gulp.src(config.dist.base)
            .pipe($.plumber({errorHandler: errorHandler}))
            .pipe(ghPages(config.path.branch));
    }
}

export default Deploy;