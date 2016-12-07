angular.module('name.service')
.service('NAME', ['$http', function($http) {
	var self = this;
	var contactInfo = [];

	this.getNames = function(cb) {
    $http.get('data/names.json').then(cb);
  };
	this.getText = function(cb) {
		$http.get('data/data.json').then(cb);
	};
	this.addContact = function(data) {
		contactInfo.push(data);
};

}]);
