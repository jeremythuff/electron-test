
app.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'view/home.html'
		}).
		when('/options', {
			templateUrl: 'view/options.html'
		}).
		otherwise({
			redirectTo: '/'
		});
});