
app.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'view/main.html'
		}).
		otherwise({
			redirectTo: '/'
		});
});