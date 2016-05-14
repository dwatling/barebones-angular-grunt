var projectConfig = require('./project-config')

var sourceFiles = projectConfig.srcDir + 'scripts/**/*.js';

var karmaConfig = function(config) {
	config.set({
		basePath: '.',
		frameworks: ['jasmine', 'sinon'],
		plugins: [
			'karma-jasmine',
			'karma-sinon',
			'karma-phantomjs-launcher',
			'karma-junit-reporter',
			'karma-coverage'
		],
		browsers: ['PhantomJS'],
		reporters: ['dots', 'coverage', 'junit'],
		junitReporter: {
			outputDir: projectConfig.outputDir + 'test/unit',
			suite: ''
		},
		coverageReporter: {
			dir: projectConfig.outputDir + 'test/coverage',
			reporters: [
				{type: 'html', subdir: 'html'},
				{type: 'cobertura', subdir: '.', file: 'cobertura.xml'}
			]
		},
		preprocessors: {
			sourceFiles: ['coverage']
		},
		files: [
			"node_modules/jquery/dist/jquery.js",
			"node_modules/lodash/lodash.js",
			"node_modules/angular/angular.js",
			"node_modules/angular-animate/angular-animate.js",
			"node_modules/angular-aria/angular-aria.js",
			"node_modules/angular-material/angular-material.js",
			"node_modules/angular-route/angular-route.js",
			"node_modules/angular-mocks/angular-mocks.js",
			sourceFiles,
			projectConfig.testDir + 'mock.templates.js',
			projectConfig.testDir + '**/*.spec.js'
		],
		singleRun: true
	});
};

module.exports = karmaConfig;
