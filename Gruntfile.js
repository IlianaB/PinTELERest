module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                ignores: ['app/js/lib/**/*.js'],
                reporter: require('jshint-stylish')
            },
            all: ['app/js/**/*.js']
        },

        connect: {
            server: {
                options: {
                    port: 8080,
                    base: 'app'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },

            html: {
                files: ['app/*.html', 'app/**/*.html']
            },

            css: {
                files: ['app/css/**/*.css']
            },

            js: {
                files: ['app/js/**/*.js'],
                tasks: ['jshint']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jshint', 'connect', 'watch']);
};