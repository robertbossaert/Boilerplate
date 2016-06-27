import 'babel-polyfill';
import gulp from 'gulp';
import runSequence from 'run-sequence';

// Get the Gulp tasks
const requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });

// Main tasks
gulp.task('dev', () => runSequence('clean', 'browsersync:src', 'assets', 'assets-watch'));
gulp.task('dist', () => runSequence('clean', 'browsersync:dist', 'assets'));

// Assets
gulp.task('assets', () => runSequence(
    ['css', 'img']
));
gulp.task('assets-watch', () => runSequence(
    ['css-watch', 'img-watch']
));

// Additional
gulp.task('zip', () => runSequence('zip'));
