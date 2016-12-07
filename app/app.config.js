angular.
	module('IMDB-App').
		config(['$locationProvider', '$routeProvider',
			function config($locationProvider, $routeProvider) {
				$locationProvider.hashPrefix('!');

				$routeProvider.
				when ('/mission', {
					template: '<home-page></home-page>'
				}).
				when ('/mission/thankyou', {
					template: '<thank-you></thank-you>'
				}).
				when ('/mission/contact', {
					template: '<contact-page></contact-page>'
				}).
				otherwise({redirectTo: '/mission'});
			}
		]);
