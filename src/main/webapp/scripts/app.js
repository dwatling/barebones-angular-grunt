angular.module("app.routes", ['ngRoute','app.components']);
angular.module("app.components", ['ngMaterial']);
angular.module("app.interceptors", []);

angular.module("app", [
	'app.templates',
	'app.routes',
	'app.interceptors',
	'app.components'])
.config(function($httpProvider, $mdThemingProvider) {
//	$mdThemingProvider.theme('default')
//    	.dark();

	// Insert HTTP interceptors here
//	$httpProvider.interceptors.push('HTTP_INTERCEPTOR');
});
