(function() {
	"use strict";

	angular.module("app").component("home", {
		templateUrl: "scripts/components/home/_home.tpl.html",
		controller: function(HomeService) {
			var self = this;
			
			self.data = {};
			
			self.$onInit = function() {
				HomeService.exampleGET().then(function(data) {
					self.data = data;
				});
			};
		}
	});
})();