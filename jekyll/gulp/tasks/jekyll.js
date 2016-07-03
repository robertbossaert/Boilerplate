import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import child from 'child_process';
import gutil from 'gulp-util';
import { jekyll as config } from '../config';
import { errorHandler } from '../util/handleError';

const $ = gulpLoadPlugins();

class Jekyll {

    static build() {

        const jekyll = child.spawn('jekyll.bat', ['build',
            '--watch',
            '--incremental',
            '--drafts',
            '--source=' + config.src.base,
            '--destination=' + config.dist.base,
            '--config=' + config.src.config
        ]);

        const jekyllLogger = (buffer) => {
            buffer.toString()
            .split(/\n/)
            .forEach((message) => gutil.log('Jekyll: ' + message));
        };

        jekyll.stdout.on('data', jekyllLogger);
        jekyll.stderr.on('data', jekyllLogger);
    }
}

export default Jekyll;