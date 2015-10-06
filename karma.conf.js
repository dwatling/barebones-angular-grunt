module.exports = function(config) {
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
			outputDir: 'target/test/unit',
			suite: ''
		},
		coverageReporter: {
			dir: 'target/test/coverage',
			reporters: [
				{type: 'html', subdir: 'html'},
				{type: 'cobertura', subdir: '.', file: 'cobertura.xml'}
			]
		},
		preprocessors: {
			'src/main/webapp/scripts/**/*.js': ['coverage']
		},
		files: [
			'src/main/webapp/vendor/jquery-2.1.4.js',
			'src/main/webapp/vendor/angular.js',
			'src/main/webapp/vendor/lodash.js',
			'src/main/webapp/vendor/angular-animate.js',
			'src/main/webapp/vendor/angular-aria.js',
			'src/main/webapp/vendor/angular-cookies.js',
			'src/main/webapp/vendor/angular-material.js',
			'src/main/webapp/vendor/angular-route.js',
			'src/main/webapp/scripts/**/*.js',
			'src/test/webapp/vendor/angular-mocks.js',
			'src/test/webapp/mock.templates.js',
			'src/test/webapp/services/**/*.spec.js',
			'src/test/webapp/components/**/*.spec.js'
		],
		singleRun: true
	});
};
