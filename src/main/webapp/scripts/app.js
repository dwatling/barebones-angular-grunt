angular.module("app.routes", ['ngRoute','app.services','app.components']);
angular.module("app.services", ['app.channels']);
angular.module("app.channels", []);
angular.module("app.components", ['ngMaterial', 'app.services']);
angular.module("app.interceptors", []);

angular.module("app", [
	'app.templates',
	'app.routes',
	'app.channels',
	'app.interceptors',
	'app.services',
	'app.components'])
.config(['$httpProvider', '$mdThemingProvider', function($httpProvider, $mdThemingProvider) {
//	$mdThemingProvider.theme('default')
//    	.dark();

	// Insert HTTP interceptors here
//	$httpProvider.interceptors.push('HTTP_INTERCEPTOR');
}]);
