import gulp from 'gulp';
import { errorHandler } from './util/handleError';

const dir = {
    root: './',
    src:  './src',
    dist: './dist',
};

module.exports = {

    browsersync: {
        port: 4000,
        src: {
            base: dir.src
        },
        dist: {
            base: dir.dist
        }
    },
    
    clean: {
        dist: {
            base: dir.dist
        }
    },

    css: {
        autoprefixer: {
            browsers: ['last 2 version', '> 5%']
        },
        src: {
            base: dir.src + '/assets/sass/**/*.scss'
        },
        dist: {
            base: dir.dist + '/assets/css'
        }
    },

    fonts: {
        src: {
            base: dir.src + '/assets/fonts/**/*.{eot,ttf,svg,woff,woff2}'
        },
        dist: {
            base: dir.dist + '/assets/fonts'
        }  
    },

    html: {
        src: {
            base: dir.src + '/html/**/*.pug'
        },
        dist: {
            base: dir.dist + '/html'
        }  
    },

    images: {
        src: {
            base: dir.src + '/assets/img/**/*.{svg,png,jpg,gif,webp}'
        },
        dist: {
            base: dir.dist + '/assets/img'
        }  
    },

    js: {
        src: {
            base: dir.src + '/assets/js/**/*.js'
        },
        dist: {
            base: dir.dist + '/assets/js'
        }  
    },

    path: {
        html:  dir.src + '/html/**/*.pug',
        js: dir.src + '/assets/js/**/*.js',
        css: dir.src + '/assets/sass/**/*.scss',
        fonts: dir.src + '/assets/fonts/**/*.{eot,ttf,svg,woff,woff2}',
        images: dir.src + '/assets/img/**/*.{svg,png,jpg,gif,webp}'
    }
}