/**
 * The "csscomb" task
 *
 * The grunt plugin for sorting CSS properties in specific order.
 *
 * npm install grunt-csscomb --save-dev
 * grunt.loadNpmTasks('grunt-csscomb');
 */
module.exports = {
    dev: {
        options: {
            config: '.csscombDev.json'
        },
        expand: true,
        cwd: '../',
        src: [
            '*.css',
            '**/*.css',
            '**/*.scss',
            '!toolbox/**',
            '!node_modules/**',
            '!build/**'
        ],
        dest: '../'
    },
    build: {
        expand: true,
        cwd: '../build/css/',
        src: ['**/*.css', '!*.resorted.css'],
        dest: '../build/css/'
    }
};
