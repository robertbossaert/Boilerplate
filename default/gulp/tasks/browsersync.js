import gulp from 'gulp';
import browsersync from 'browser-sync';
import { browsersync as config } from '../config';
import { errorHandler } from '../util/handleError';

class BrowserSync {

    static src() {
        browsersync({
            files: [config.src.base + '/**'],
            port: config.port,
            server: {
                baseDir: config.src.base
            }
        });
    }

    static dist() {
        browsersync({
            files: [config.dist.base + '/**'],
            port: config.port,
            server: {
                baseDir: config.dist.base
            }
        });
    }
}

export default BrowserSync;