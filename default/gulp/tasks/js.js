import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import config from '../config';
import babel from 'gulp-babel';
import { errorHandler } from '../util/handleError';

const $ = gulpLoadPlugins();

class Js {

    static lint() {

        return gulp.src(config.js.src.base)
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish'))
    }

    // Build javascript
    static build() {

        return gulp.src(config.js.src.base)
            .pipe($.plumber({errorHandler: errorHandler}))
            .pipe($.babel({presets: ['es2015']}))
            .pipe($.concat('app.js').on('error', errorHandler))
            .pipe($.uglify())
            .pipe($.sourcemaps.write('./'))
            .pipe(gulp.dest(config.js.dist.base));
    }
}

export default Js;