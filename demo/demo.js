var awk = require('../index'),
    fs = require('fs'),
    awkscript = fs.readFileSync( __dirname + '/demo.awk'),
    data = fs.readFileSync( __dirname + '/data.txt');

var result = awk(awkscript, data);

console.log(result.exit_code);
console.log(result.stdout);
console.log(result.stderr);