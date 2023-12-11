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
        files: [
            '../*.css',
            '../**/*.scss'
        ],
        tasks: ['csscomb', 'sass'],
        options: {
            spawn: false
        }
    }
};
