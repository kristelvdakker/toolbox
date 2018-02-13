/**
 * The "watch" task
 *
 * Run tasks whenever watched files change.
 *
 * npm install grunt-contrib-watch --save-dev
 * grunt.loadNpmTasks('grunt-contrib-watch');
 */
module.exports = {
    scripts: {
        files: '../*.css',
        tasks: 'csscomb',
        options: {
            spawn: false
        }
    }
};
