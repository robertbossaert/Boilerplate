import pkg from './package.json';

const dir = {
    root: '.',
    src:  './src',
    dist: './dist',
};

module.exports = {

    browsersync: {
        src: {
            server: {
                baseDir: dir.src
            },
            open: false,
            ui: false,
            notify: false
        },
        dist: {
            server: {
                baseDir: dir.dist
            },
            open: false,
            ui: false,
            notify: false
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

    img: {
        src: {
            base: dir.src + '/assets/img/**/*.{svg,png,jpg,gif,webp}'
        },
        dist: {
            base: dir.dist + '/assets/img'
        }
    },

    zip: {
        filename: pkg.name + '.zip',
        dist: {
            base: dir.dist + '/**/!(*.zip)'
        },
        dest: {
            base: dir.root
        }
    }
};