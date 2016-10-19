require('shelljs/global');

ls('-R', "dist").forEach(function(file) {
	if(file.substr(file.length - 2) === "js") {
		sed('-i', 'require\\("src\\/app', 'require(require.main.filename.replace("main.html", "")\+"', "dist/"+file);
	}
});

exit(0);