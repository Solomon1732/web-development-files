var app = angular.module("myApp", []);

app.controller("Hello", ["$scope", "$http", function($scope, $http) {
	$http.get("http://rest-service.guides.spring.io/greeting")
		.then(function(response) {
			$scope.greeting = response.data;
	});
}]);