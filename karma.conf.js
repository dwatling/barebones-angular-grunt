var projectConfig = require('./project-config')

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
			projectConfig.outputDir + 'web/js/bundle.js',
			projectConfig.testDir + 'mock.templates.js',
			projectConfig.testDir + '**/*.spec.js'
		],
		singleRun: true
	});
};

module.exports = karmaConfig;
