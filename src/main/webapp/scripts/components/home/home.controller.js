angular.module('app.components')
.controller('HomeController', ['$scope', 'ExampleService', function($scope, ExampleService) {
	$scope.data = {};

	$scope.initialize = function() {
		ExampleService.exampleGET().then(function(response) {
			$scope.data = new Example(response.data);
		});
	};

	$scope.initialize();
}]);
