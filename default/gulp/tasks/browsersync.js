import gulp from 'gulp';
import browsersync from 'browser-sync';
import { browsersync as config } from '../config';
import { errorHandler } from '../util/handleError';

class BrowserSync {

    static src() {
        browsersync(config.src)
    }

    static dist() {
        browsersync(config.dist)
    }
}

export default BrowserSync;