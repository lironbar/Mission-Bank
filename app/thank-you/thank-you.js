'use strict';
angular.
module('thankYou').
component('thankYou', {
  templateUrl: 'thank-you/thank-you.html',
  controller: ['$http', '$scope', '$localStorage', 'NAME', function mainCtrl($http, $scope, $localStorage, NAME) {

    $scope.$watch(function() {return NAME.contactInfo}, function(nVal,oVal) {
  $scope.contactInfo = nVal;
});


  }]
});
