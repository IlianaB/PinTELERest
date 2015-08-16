module.exports = function (grunt) {
    grunt.initConfig({
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
                livereload: true,
            },
            css: {
                files: ['app/**/*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['connect', 'watch']);
};