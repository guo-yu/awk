var fs = require('fs');
var awk = require('../index');
var awkscript = fs.readFileSync( __dirname + '/demo.awk');
var data = fs.readFileSync( __dirname + '/data.txt');
var result = awk(awkscript, data);

console.log(result.exit_code);
console.log(result.stdout);
console.log(result.stderr);