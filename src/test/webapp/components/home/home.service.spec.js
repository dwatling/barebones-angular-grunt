describe("ExampleService", function() {
	var service, $httpBackend;

	beforeEach(function() {
		angular.mock.module("app");

		inject(function($injector) {
			service = $injector.get("HomeService");
			$httpBackend = $injector.get("$httpBackend");
		});
	});

	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});
	
	describe("examplePOST", function() {
		it("should POST params", function() {
			$httpBackend.expect("POST", "http://httpbin.org/post").respond(200, {});

			service.examplePOST("TOKEN");

			$httpBackend.flush();
		})
	});
});
