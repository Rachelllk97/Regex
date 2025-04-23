const fs = require('fs')


var input = fs.readFile('test.txt')


// function readFile () {

var counter = 0

 
for(var i = 0; i < input.length; i++) {
  if ((input.substring(i, 13) == '@softwire.com')) { counter = counter + 1 }
}
console.log(counter)

// }

import { readFile } from 'node:fs';

readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});