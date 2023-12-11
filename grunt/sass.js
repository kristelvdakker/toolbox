/**
 * The "csscomb" task
 *
 * The grunt plugin for sorting CSS properties in specific order.
 *
 * npm install grunt-csscomb --save-dev
 * grunt.loadNpmTasks('grunt-csscomb');
 */
module.exports = {
    dist: {
        options: {
            style: 'expanded',
            unixNewlines: false,
        },
        files: {
            "./../style.css": "./../styles/style.scss",
        }
    }
};
