module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {
                ignores: ['app/js/lib/**/*.js'],
                reporter: require('jshint-stylish')
            },
            all: ['app/js/**/*.js']
        },

        nodemon: {
            dev: {
                script: 'server.js'
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
        },

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['jshint', 'concurrent']);
};