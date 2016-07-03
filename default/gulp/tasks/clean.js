import gulp from 'gulp';
import { clean as config } from '../config';
import del from 'del';

class Clean {

    // Delete the dist folder
    static delete() {
        return del([config.dist.base], {force: true});
    }
}

export default Clean;