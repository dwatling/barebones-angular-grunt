(function() {
	"use strict";

	function HomeFunc() {
		function Home(json) {
			if (json === undefined) {
				json = {};
			}

			this.args = json.args;
			this.headers = json.headers;
			this.origin = json.origin;
			this.url = json.url;
		}

		Home.prototype = {
			// Add functions here
		};

		return Home;
	}

	angular.module("app.components").factory("Home", HomeFunc);
})();
