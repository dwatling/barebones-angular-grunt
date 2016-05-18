var angular = require('angular');

angular.element(document).ready(function () {
	require('./app');
	angular.bootstrap(document, ['app'], {strictDi: window.jasmine === undefined});
});
