/**
 * The "csscomb" task
 *
 * The grunt plugin for sorting CSS properties in specific order.
 *
 * npm install grunt-csscomb --save-dev
 * grunt.loadNpmTasks('grunt-csscomb');
 */
module.exports = {
    options: {
        processors: [
            require('autoprefixer')({
                browsers: [
                    'last 4 versions',
                    'ie 9',
                    'ie 10'
                ]
            }) // add vendor prefixes
        ],
        syntax: require('postcss-scss') // work with SCSS directly
    },
    dist: {
        src: [
            '../*.css',
            '../**/*.css',
            '../**/*.scss',
            '!../toolbox/**',
            '!../node_modules/**',
            '!../build/**'
        ]
    }
};
