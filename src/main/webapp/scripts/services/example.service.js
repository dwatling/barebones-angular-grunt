angular.module('app.services')
.service('ExampleService', ['$http', '$q', function($http, $q) {
	this.exampleGET = function(query) {
		var params = {
			q: query
		};

		var path = 'http://httpbin.org/get';

		return $http({
			method: 'GET',
			url: path,
			params: params
		});
	};

	this.examplePOST = function(data) {
		var params = {data: data};
		return $http({
			method: 'POST',
			url: 'http://httpbin.org/post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: $.param(params)
		});
	};
}]);
