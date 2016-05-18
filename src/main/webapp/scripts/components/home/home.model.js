/* @ngInject */
var HomeModel = function() {
	function HomeModel(json) {
		if (json === undefined) {
			json = {};
		}

		this.args = json.args;
		this.headers = json.headers;
		this.origin = json.origin;
		this.url = json.url;
	}

	HomeModel.prototype = {
		// Add functions here
	};

	return HomeModel;
}

module.exports = HomeModel;
