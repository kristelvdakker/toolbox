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
        src: ['*.css', '**/*.css'],
        dest: '../'
    }
};
