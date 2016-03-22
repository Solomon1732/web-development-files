/* 
 * Copyright 2016 Shlomi Reuveni.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var app = angular.module("myApp", []);

app.controller("Hello", ["$scope", "$http", function($scope, $http) {

	$scope.helloWithName = function() {
		var url = "http://rest-service.guides.spring.io/greeting";

		if($scope.name) {
			url = "http://rest-service.guides.spring.io/greeting?name=" + $scope.name;
		}

		console.log("The name is: " + $scope.name + " and the url is: " + url);
		$http.get(url)
			.then(function(response) {
				$scope.greeting = response.data;
		});
	};

}]);