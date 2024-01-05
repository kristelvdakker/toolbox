/**
 * The "sass" task
 *
 * Compile Sass to CSS.
 *
 * npm install grunt-contrib-sass --save-dev
 * grunt.loadNpmTasks('grunt-contrib-sass');
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
