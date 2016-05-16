var projectConfig = require('./project-config')

var gruntConfig = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		global: {
			tempBuildFolder: projectConfig.outputDir + 'build',
			outputFolder: projectConfig.outputDir + 'web',
			sourceFolder: projectConfig.srcDir
		},
		sass: {
			options: {
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'<%= global.outputFolder %>/css/app.min.css': ['<%= global.sourceFolder %>/stylesheets/app.scss'],
					'<%= global.outputFolder %>/css/vendor.min.css': ['node_modules/angular-material/angular-material.scss']
				}
			}
		},
		watch: {
			index: {
				files: ['<%= global.sourceFolder %>/index.html'],
				tasks: ['copy:build'],
				options: {
					spawn: false,
					interrupt: true
				}
			},
			app: {
				files: ['<%= global.sourceFolder %>/scripts/**/*.js'],
				tasks: ['jshint', 'ngAnnotate', 'concat'],
				options: {
					spawn: false,
					interrupt: true
				}
			},
			templates: {
				files: ['<%= global.sourceFolder %>/**/_*.html'],
				tasks: ['ngtemplates', 'ngAnnotate', 'concat'],
				options: {
					spawn: false,
					interrupt: true
				}
			},
			styles: {
				files: ['<%= global.sourceFolder %>/**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
					interrupt: true
				}
			}
		},
		ngtemplates: {
			options: {
				module: 'app.templates'
			},
			app: {
				cwd: '<%= global.sourceFolder %>',
				src: '**/_*.html',
				dest: '<%= global.tempBuildFolder %>/app.templates.js',
				options: {
					standalone: true,
					htmlmin: {
						collapseBooleanAttributes: true,
						collapseWhitespace:	true,
						removeAttributeQuotes:	true,
						removeComments:	true,
						removeEmptyAttributes: true,
						removeRedundantAttributes: true,
						removeScriptTypeAttributes:	true,
						removeStyleLinkTypeAttributes: true
					}
				}
			}
		},
		ngAnnotate: {
			app: {
				files: [{
					expand: true,
					src: [
						'<%= global.tempBuildFolder %>/app.templates.js',
						'<%= global.sourceFolder %>/scripts/**/*.js'
					],
					dest: '<%= global.tempBuildFolder %>/js'
				}]
			}
		},
		uglify: {
			app: {
				files: {
					'<%= global.outputFolder %>/js/app.min.js': ['<%= global.tempBuildFolder %>/js/**/*.js']
				}
			},
			vendor: {
				files: {
					'<%= global.outputFolder %>/js/vendor.min.js': [
						'node_modules/jquery/dist/jquery.js',
						'node_modules/lodash/lodash.js',
						'node_modules/angular/angular.js',
						'node_modules/angular-animate/angular-animate.js',
						'node_modules/angular-aria/angular-aria.js',
						'node_modules/angular-material/angular-material.js',
						'node_modules/angular-route/angular-route.js'
					]
				}
			}
		},
		concat: {
			app: {
				options: {
					sourceMap: true
				},
				files: {
					'<%= global.outputFolder %>/js/app.min.js': ['<%= global.tempBuildFolder %>/js/**/*.js']
				}
			}
		},
		copy: {
			build: {
				files: [
					{expand: true, flatten: true, cwd: '<%= global.sourceFolder %>', src: ['index.html', 'favicon.ico'], dest: '<%= global.outputFolder%>'}
				]
			}
		},
		eslint: {
			target: {
				src: ['<%= global.sourceFolder %>']
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});  

	// Default task.  
	grunt.registerTask('build', ['sass:dist', 'eslint', 'ngtemplates', 'ngAnnotate', 'uglify', 'copy:build']);
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('default', ['build', 'test']);
};

module.exports = gruntConfig;
