

app.controller("MenuBarController", function($scope) {

	const remote = require('electron').remote;
	const {Menu, MenuItem} = remote;

	$scope.items = Menu.getApplicationMenu().items;

	console.log($scope.items[0].submenu.items[0]);

	$scope.execute = (menuItem, $event) => {

		// console.log(menuItem.click);
		// console.log(menuItem);
		// console.log(remote.getCurrentWindow());
		// console.log($event);

		console.log(menuItem.role);

		if(menuItem.role) {
			console.log(remote.getCurrentWindow());
		} else {

			console.log(menuItem.click);

			menuItem.click(menuItem, remote.getCurrentWindow(), $event);
		}
	}

	$scope.exit = () => {
		remote.getCurrentWindow().close();
	};

	$scope.minimize = () => {
		remote.getCurrentWindow().minimize();
	};

	$scope.maximize = () => {
		remote.getCurrentWindow().maximize();
	};

});