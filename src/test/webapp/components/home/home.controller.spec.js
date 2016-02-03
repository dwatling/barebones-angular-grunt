describe("HomeController", function() {
	var $rootScope, $scope, homeService, $controller, $q;

	beforeEach(function() {
		angular.mock.module("app.components");

		inject(function($injector) {
			homeService = $injector.get("HomeService");
			$rootScope = $injector.get("$rootScope");
			$controller = $injector.get("$controller");
			$q = $injector.get("$q");
			$scope = $rootScope.$new();
		});
	});

	var createController = function() {
		return $controller('HomeController', {
			'$scope': $scope,
			'HomeService': homeService
		});
	};

	afterEach(function() {
	});

	it("should invoke ExampleService.exampleGET", function() {
		var mockData = {};
		var mockResponse = {status: 200, data: mockData};
		var exampleServiceStub = sinon.stub(homeService, 'exampleGET').returns($q.when(mockResponse));

		createController();

		// Process promises
		$rootScope.$digest();

		expect(exampleServiceStub.calledOnce).toBe(true);
	});
});
