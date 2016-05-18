/* @ngInject */
var routes = function ($routeProvider) {
	$routeProvider
		.when('/', {template: '<home></home'})
		.otherwise({redirectTo: '/'});
}

module.exports = routes;
