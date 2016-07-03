import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { html as config } from '../config';
import { errorHandler } from '../util/handleError';

const $ = gulpLoadPlugins();

class Html {

    // Build html
    static build(file) {

        return gulp.src(config.src.base)
            .pipe($.plumber({errorHandler: errorHandler}))
            .pipe($.pug({pretty: true}))
            .pipe(gulp.dest(config.dest.base));
    }
}

export default Html;