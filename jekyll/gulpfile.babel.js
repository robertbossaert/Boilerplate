import gulp from 'gulp';
import config from './gulp/config';

import BrowserSync from './gulp/tasks/browsersync';
import Clean from './gulp/tasks/clean';
import Css from './gulp/tasks/css';
import Deploy from './gulp/tasks/deploy';
import Fonts from './gulp/tasks/fonts';
import Html from './gulp/tasks/html';
import Images from './gulp/tasks/img';
import Jekyll from './gulp/tasks/jekyll';
import Js from './gulp/tasks/js';

gulp.task('jekyll:build', Jekyll.build);
gulp.task('js:lint', Js.lint);
gulp.task('js:build', ['js:lint'], Js.build);
gulp.task('style:build', Css.build);
gulp.task('html:build', Html.build);
gulp.task('fonts:build', Fonts.build);
gulp.task('images:build', Images.build);
gulp.task('browsersync:dist', BrowserSync.dist);
gulp.task('deploy:run', Deploy.run);

gulp.task('clean', Clean.delete);
gulp.task('build', ['images:build', 'js:build', 'style:build', 'html:build', 'fonts:build', 'browsersync:dist']);

gulp.task('watch', ['jekyll:build', 'browsersync:dist'], () => {
    gulp.watch(config.path.js, ['js:build']);
    gulp.watch(config.path.css, ['style:build']);
    gulp.watch(config.path.html, ['html:build']);
    gulp.watch(config.path.fonts, ['fonts:build']);
    gulp.watch(config.path.images, ['images:build']);
});

gulp.task('default', ['build', 'watch']);