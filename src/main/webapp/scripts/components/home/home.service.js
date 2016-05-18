/* @ngInject */
var HomeService = function($http, $httpParamSerializerJQLike, $q, HomeModel) {
	this.exampleGET = function(query) {
		var params = {
			q: query
		};

		var path = 'http://httpbin.org/get';

		return $http({
			method: 'GET',
			url: path,
			params: params
		}).then(function(response) {
			return new HomeModel(response.data);
		});
	};

	this.examplePOST = function(data) {
		var params = {data: data};
		return $http({
			method: 'POST',
			url: 'http://httpbin.org/post',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			data: $httpParamSerializerJQLike(params)
		});
	};
}

module.exports = HomeService;
