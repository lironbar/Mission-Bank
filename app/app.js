'use strict';

angular.module('IMDB-App', [
	'ngRoute',
	'name.service',
	'contactPage',
	'homePage',
	'thankYou',
	'ngStorage'
])
	.controller('navCtrl', navCtrl);

	function navCtrl($scope, $location, NAME)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
		NAME.getNames(function(response){
			var names = response.data;
			$scope.names = names;
			console.log($scope.names);
			});
}
