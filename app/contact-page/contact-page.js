'use strict';
angular.
module('contactPage').
component('contactPage', {
	templateUrl: 'contact-page/contact-page.html',
	controller: ['$routeParams','$rootScope', '$scope','$location', 'NAME',
	function movieCtrl($routeParams, $rootScope, $scope, $location, NAME) {
		$scope.user = [];
		$scope.submitForm = function(path) {
		// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				console.log($scope.user);
				NAME.addContact($scope.user);
				$location.path( path );
			}
		}

	}]
});
