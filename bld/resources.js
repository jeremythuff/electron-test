require('shelljs/global');

if (!test('-d', "dist")) mkdir("dist");
if (!test('-d', "dist/resources")) mkdir("dist/resources");

cp("-Rf", "src/resources/img", "dist/resources");

exit(0);