angular.element(document).ready(function () {
	angular.bootstrap(document, ['app'], {strictDi: window.jasmine === undefined});
});
