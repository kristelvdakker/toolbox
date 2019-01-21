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
        configFile: 'config/.sass-lint.yml',
    },
    target: [
        '../*.css',
        '../**/*.css',
        '../**/*.scss',
        '!../toolbox/**',
        '!../node_modules/**',
        '!../build/**'
    ]
};
