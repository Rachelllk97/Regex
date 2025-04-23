import fs from 'fs';

function readFile (){

fs.readFile('test.txt', 'utf8', (err, data) => {
  if (err) throw err;
  var input = data
  findString(input)
});

}


function findString (input) {
var counter = 0
 
for(var i = 0; i < input.length; i++) {
  if ((input.substring(i, i + 13 ) === '@softwire.com')) { 
    counter = counter + 1 }
}
console.log(counter)

}

readFile()


