var angular = require('angular');

var home = {
	template: require('./_home.html'),
	/* @ngInject */
	controller: function(HomeService) {
		var self = this;
		
		self.data = {};
		
		self.$onInit = function() {
			HomeService.exampleGET().then(function(data) {
				self.data = data;
			});
		};
	}
}

angular.module('home').component('home', home);

module.exports = home;
