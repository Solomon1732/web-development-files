var mainApp = angular.module("mainApp", []);

mainApp.controller('studentController', function($scope) {
	$scope.student = {
		firstName: "John",
		lastName: "Doe",
		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
});