'use strict';
angular.
module('homePage').
component('homePage', {
  templateUrl: 'home-page/home-page.html',
  controller: ['$http', '$scope', '$location', 'NAME', function mainCtrl($http, $scope, $location, NAME) {
  	// set initial table order value
    $scope.orderProp = 'id';

    NAME.getText(function(response){
			var names = response.data;
			$scope.text = names;
			console.log($scope.text);
			});

  }]
});
