require('shelljs/global');
 
if (!test('-d', "dist")) mkdir("dist");

cp("src/main.js", "dist");

exit(0);