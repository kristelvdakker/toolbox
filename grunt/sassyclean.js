/**
 * The "sassyclean" task
 *
 * Scans a project for partials that are never imported.
 *
 * npm install grunt-sassyclean --save-dev
 * grunt.loadNpmTasks('grunt-sassyclean');
 */
module.exports = {
    options: {
        modules: [
            '../*.css',
            '../**/*.css',
            '../**/*.scss',
            '!../toolbox/**',
            '!../node_modules/**',
            '!../build/**'
        ],
        buildfiles: ['../**/*.scss'],
        remove: false,
        days: null
    }
};


