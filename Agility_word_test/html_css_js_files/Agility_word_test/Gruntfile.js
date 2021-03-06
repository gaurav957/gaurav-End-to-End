module.exports = function(grunt) {

// All configuration goes here 
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*concat: {
        // Configuration for concatinating files goes here.
        dist: {
            src: [
                    'script/custom_script.js'       
                    
            ],
            dest: 'js/production/global.js',
        },
    },*/

  /*  uglify: {
        build: {
            src: 'js/production/spash_intro.js',
            dest: 'js/production/spash_intro.min.js',
        },
    },
*/

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'dev-img/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/'
            }]
        }
    },

    compass: {
        dev: {
            options: {              
                sassDir: 'scss',
                cssDir: 'css',
				sourcemap: true,
                fontsDir: 'fonts',
                imagesDir: 'images/',
                images: 'images/',
                javascriptsDir: 'js/pro',
                //environment: 'development',
                outputStyle: 'expanded',
                relativeAssets: false,
                httpPath: '',
            }
        },
    },

    watch: {
       // scripts: {
           // files: ['script/**/**.js'],
           // tasks: ['concat', 'uglify']
      //  },
        images: {
            files: ['dev-img/**.{png,jpg,gif}'],
            tasks: ['imagemin']
        },
        compass: {
            files: ['**/*.{scss,scss}'],
            tasks: ['compass:dev']
        }

    },


});

// Where we tell Grunt we plan to use this plug-in.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');

// Where we tell Grunt what to do when we type "grunt" into the terminal.
//grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'compass', 'watch']);//with concat and uglify
grunt.registerTask('default', ['imagemin', 'compass', 'watch']);

};