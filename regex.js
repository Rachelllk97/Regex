import fs from 'fs';

function readFile (){
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        var input = data
        // findString(input)
        useRegex(input)
    });
}

function findString (input) {
    var counter = 0
     
    for(var i = 0; i < input.length; i++) {
      if ((input.substring(i, i + 13 ) === '@softwire.com')) { 
        counter = counter + 1 }
    }
    console.log(counter)
};



function useRegex (input) {

    let email_domain = "@softwire.com"
    // let regex = /^[A-Za-z0-9._%+-]/ + email_domain
    // let regex = email_domain
    let regex = /[A-Za-z0-9._%+-]@softwire.com/g
    let found = input.match(regex)
    let count = found.length

console.log(count)
console.log(found)
}

readFile()


