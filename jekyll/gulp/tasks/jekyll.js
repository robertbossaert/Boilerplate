import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import { jekyll as config } from '../config';
import { errorHandler } from '../util/handleError';

class Jekyll {

    static build() {

        return child.spawn('jekyll', ['build',
            '--watch',
            '--incremental',
            '--drafts'
        ]);
    }
}

export default Jekyll;