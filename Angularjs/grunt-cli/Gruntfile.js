module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        php: {
            dev: {
                options: {
                    hostname: '127.0.0.1',
                    port: 8000
                }
            }
        },

        less: {
            dev: {
                files: {
                    "style.css": "style.less"
                }
            }
        },

        watch: {

            markup: {
                files: ['styles.less', '**/*.html'],
                options: {
                    livereload: true,
                }
            },

            styles: {
                files: ['style.less'],
                tasks: ['less:dev'],
                options: {
                    livereload: true
                }
            },
        }
    });


    // Tasks.

    grunt.registerTask('server', [
        // Starts the livereload server to which the browser will connect to
        // get notified of when it needs to reload

        'php',
        'watch',
        'less',
        //   'connect',
        // Connect is no longer blocking other tasks, so it makes more sense to open the browser after the server starts
        // 'open',
        // Starts monitoring the folders and keep Grunt alive
        //  'regarde'
    ]);


    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['php:dev', 'watch']);


};
