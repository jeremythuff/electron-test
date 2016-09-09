require('shelljs/global');
 
if (!test('-d', "dist")) mkdir("dist");
if (!test('-d', "dist/app")) mkdir("dist/app");

cp("src/app/main.html", "dist/app");
cp("-Rf", "src/app/view", "dist/app");

exit(0);