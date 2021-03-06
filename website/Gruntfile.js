module.exports = function(grunt) {
	'use strict';

	require('time-grunt')(grunt);

	grunt.initConfig({

		// Package Info
		pkg: grunt.file.readJSON('package.json'),

		// Grunt Clean
		// Clear files and folders that are auto generated
		// https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			dist: {
				files: [{
					src: [
						'<%= pkg.directory.dist %>/*'
					]
				}],
				options:{
					force: true // enables deletion fo folders outside of working directory
				}
			}
		},

		// Grunt Copy
		// Copies files and folders
		// https://github.com/gruntjs/grunt-contrib-copy
		copy: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= pkg.directory.app %>',
					dest: '<%= pkg.directory.dist %>',
					src: [
						'assets/**/*'
					]
				}]
			}
		},

		// Concat
		// https://github.com/gruntjs/grunt-contrib-concat
		concat: {
			dist: {
				src: '<%= pkg.paths.page.js %>',
				dest: '<%= pkg.directory.dist %>/assets/js/main.js',
			},
		},

		// Uglify
		// https://github.com/gruntjs/grunt-contrib-uglify
		uglify: {
			dist: {
				files: {
					'<%= pkg.directory.dist %>/assets/js/main.min.js': ['<%= pkg.directory.dist %>/assets/js/main.js']
				}
			}
		},

		// Compass
		// Generates the CSS from SCSS files
		// https://github.com/gruntjs/grunt-contrib-compass
		compass: {
			dist: {
				options: {
					sassDir: '<%= pkg.directory.app %>/scss',
					cssDir: '<%= pkg.directory.dist %>/assets/css',
					imagesDir: '<%= pkg.directory.dist %>/assets/images',
					javascriptDir: '<%= pkg.directory.dist %>/assets/js',
					fontsDir: '<%= pkg.directory.dist %>/assets/fonts',
					relativeAssets: false,
					outputStyle: 'expanded',
					importPath: '<%= pkg.paths.global.scss %>' // Compass will also look at the global scss file directory
				}
			}
		},

		// Assemble
		// Static site generator for Node.js, Grunt.js, and Yeoman (and soon, Gulp).
		// https://github.com/assemble/assemble
		assemble: {
			dist: {
				options: {
					assets: '<%= pkg.directory.dist %>',
					partials: ['<%= pkg.paths.global.html %>','<%= pkg.paths.page.html %>'],
					layout: ['<%= pkg.paths.page.layout %>'],
					data: '<%= pkg.paths.page.data %>',
					production: true,
					pages: ['<%= pkg.directory.app %>/views/pages/**/*.hbs']
				},
				files: [{
					expand: true,
					src: ['**/*.hbs'],
					cwd: '<%= pkg.directory.app %>/views/pages/',
					dest: '<%= pkg.directory.dist %>'
				}]
			}
		},

		// Watch
		// Watches for changes to specific files
		// https://github.com/gruntjs/grunt-contrib-watch
		watch: {
			js: {
				files: '<%= pkg.paths.page.js %>',
				tasks: ['copy:dist'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['<%= pkg.paths.global.html %>','<%= pkg.paths.page.html %>'],
				tasks: ['assemble:dist'],
				options: {
					livereload: true
				}
			},
			styles: {
				files: ['<%= pkg.paths.global.scss %>/**/*.scss','<%= pkg.paths.page.scss %>/**/*.scss'],
				tasks: ['compass'],
				options: {
					livereload: true
				}
			},
			json: {
				files: '<%= pkg.paths.page.data %>',
				tasks: ['copy:dist','assemble:dist'],
				options: {
					livereload: true
				}
			}
		},

		// Grunt Connect
		// https://github.com/gruntjs/grunt-contrib-connect
		// Used to create a static web server for dist
		connect: {
			options: {
				port: 7001,
				keepalive: true,
				hostname: 'localhost'
			},
			dist: {
				options: {
					open: true,
					base: '../public'
				}
			}
		},

		// Concurrent
		// Allow multiple tasks to occur at once.  Using this technique because it gives us flexibility in the future to add other tasks such as CONNECT.
		// https://github.com/sindresorhus/grunt-concurrent
		concurrent: {
			dist: ['watch','connect:dist'],
			options: {
				logConcurrentOutput: true
			}
		}

	});

	require('load-grunt-tasks')(grunt,{
		pattern: ['grunt-*', 'assemble']
	});

	// Development grunt task
	grunt.registerTask('build', [
		// Cleanup Previously Generated Files
		'clean:dist',

		// Sass compilation
		'compass:dist',


		'concat:dist',

		// Copy HTML and assets
		'copy:dist',

		'uglify:dist'

	]);

	// Development grunt task
	grunt.registerTask('default', [

		// reuse the above build task.  gives us core flexibilty if we want to add more types of tasks in the future
		'build',

		// Assemble the HTML files
		'assemble:dist',

		// Runs WATCH 
		'concurrent:dist'
	]);

};