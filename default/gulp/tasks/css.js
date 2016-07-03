import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { css as config }  from '../config';
import { errorHandler } from '../util/handleError';

const $ = gulpLoadPlugins();

class Css {

    // Build sass
    static build() {

        return gulp.src(config.src.base)
	        .pipe($.sass().on('error', errorHandler))
            .pipe($.plumber({errorHandler: errorHandler}))
            .pipe($.sourcemaps.init())
            .pipe($.autoprefixer(config.autoprefixer.browsers))
            .pipe($.minifyCss())
            .pipe($.concatCss('style.css'))
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(config.dist.base));
    }
}

export default Css;