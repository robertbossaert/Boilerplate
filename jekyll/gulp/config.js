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

    deploy: {
        src: {
            base: dir.src
        },
        dist: {
            base: dir.dist
        },
        path: {
            branch: 'gh-pages'
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
            base: dir.src + '/_pugfiles/*.pug'
        },
        dest: {
            base: dir.src + '/_includes'
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

    jekyll: {
        src: {
            base: dir.src,
            config: '_config.yml'
        },
        dist: {
            base: dir.dist,
            config: ['_config.yml', '_config.dist.yml']
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
        jekyll: [
            dir.src + '/*.html',
            dir.src + '/_includes/*',
            dir.src + '/_layouts/*'
        ],
        html: dir.src + '/_pugfiles/**/*.pug',
        js: dir.src + '/assets/js/**/*.js',
        css: dir.src + '/assets/sass/**/*.scss',
        fonts: dir.src + '/assets/fonts/**/*.{eot,ttf,svg,woff,woff2}',
        images: dir.src + '/assets/img/**/*.{svg,png,jpg,gif,webp}'
    }
}