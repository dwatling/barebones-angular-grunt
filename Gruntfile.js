var projectConfig = require('./project-config');
var webpackConfig = require('./webpack.config.js');

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
		webpack: {
			main: webpackConfig
		},
		copy: {
			build: {
				files: [
					{expand: true, flatten: true, cwd: '<%= global.sourceFolder %>', src: ['index.html', 'favicon.ico'], dest: '<%= global.outputFolder%>'}
				]
			}
		},
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}
	});  

	// Default task.  
	grunt.registerTask('build', ['sass:dist', 'webpack:main', 'copy:build']);
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('default', ['build', 'test']);
};

module.exports = gruntConfig;
