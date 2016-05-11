describe("Home component", function() {
	var $rootScope, $scope, homeService, $componentController, $q;

	beforeEach(function() {
		angular.mock.module("app");

		inject(function($injector) {
			homeService = $injector.get("HomeService");
			$rootScope = $injector.get("$rootScope");
			$componentController = $injector.get("$componentController");
			$q = $injector.get("$q");
			$scope = $rootScope.$new();
		});
	});

	var createComponent = function() {
		return $componentController('home');
	};

	afterEach(function() {
	});

	describe("$onInit", function() {
		it("should invoke ExampleService.exampleGET", function() {
			var mockData = {};
			var mockResponse = {status: 200, data: mockData};
			var exampleServiceStub = sinon.stub(homeService, 'exampleGET').returns($q.when(mockResponse));

			var component = createComponent();
			
			component.$onInit();
			
			$rootScope.$apply();

			expect(exampleServiceStub.calledOnce).toBe(true);
		});
	});
});
