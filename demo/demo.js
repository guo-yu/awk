var awk = require('../index'),
    fs = require('fs');

var result = awk(fs.readFileSync( __dirname + '/demo.awk'),fs.readFileSync( __dirname + '/data.txt'));

console.log(result.exit_code);
console.log(result.stdout);
console.log(result.stderr);