module.exports = function(grunt) {

// All configuration goes here
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        // Configuration for concatinating files goes here.
		options : {
			sourceMap :true
		  },
        dist: {
            src: [
                    'scripts/vendor/jquery.min.js',
					'scripts/vendor/modernizr-respond.min.js',
					'scripts/vendor/bootstrap.js',
					'scripts/vendor/lodash.min.js',
					'scripts/vendor/vue.js',
					'scripts/vendor/vue-animated-list.js',
					'scripts/custom.js'
                    
            ],
            dest: 'js/global.js',
        },
    },
    uglify: {
		options : {
			sourceMap : true,
			sourceMapIncludeSources : true,
			sourceMapIn : 'js/global.js.map'
		  },
        build: {
            src: 'js/global.js',
            dest: 'js/global.min.js',
        },
    },
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'dev-img/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'img/'
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
                imagesDir: 'img/',
                images: 'img/',
                javascriptsDir: 'js/pro',
                //environment: 'development',
                outputStyle: 'compressed',
                relativeAssets: false,
                httpPath: '',
            }
        },
    },
    watch: {
        scripts: {
            files: ['scripts/**/**.js'],
            tasks: ['concat', 'uglify'],
            options: {
                spawn: false,
				sourceMap :true
            },
        },
        images: {
            files: ['dev-img/**.{png,jpg,gif}'],
            tasks: ['imagemin'],
            options: {
                spawn: false,
            }
        },
        compass: {
            files: ['**/*.{scss,scss}'],
            tasks: ['compass:dev'],
        }
    },
});

// Where we tell Grunt we plan to use this plug-in.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
//Where we tell Grunt what to do when we type "grunt" into the terminal.
grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'compass', 'watch']);
};