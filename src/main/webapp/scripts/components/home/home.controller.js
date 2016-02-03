(function() {
	"use strict";

	function HomeControllerFunc($scope, HomeService, Home) {
		$scope.data = {};

		$scope.initialize = function() {
			HomeService.exampleGET().then(function(response) {
				$scope.data = new Home(response.data);
			});
		};

		$scope.initialize();
	}

	angular.module('app.components').controller('HomeController', HomeControllerFunc);
})();