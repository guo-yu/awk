## awk ![npm](https://badge.fury.io/js/awk.png)

a wrapper of [WebAwk](https://github.com/agordon/webawk), awk in javascript

### Installation
````
$ npm install awk
````

### Example
````javascript
var awk = require('awk'),
    fs = require('fs'),
    awkscript = fs.readFileSync( __dirname + '/demo.awk'),
    data = fs.readFileSync( __dirname + '/data.txt');

var result = awk(awkscript, data);

console.log(result.exit_code);
console.log(result.stdout);
console.log(result.stderr);
````

### Demo
````
$ git clone https://github.com/turingou/awk.git
$ cd awk
$ node demo/demo.js
````

### API
check this file: `index.js`

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2013 turing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
generated using [docor](https://github.com/turingou/docor.git) @ 0.1.0. brought to you by [turingou](https://github.com/turingou)