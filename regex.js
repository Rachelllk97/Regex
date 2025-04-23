import fs from 'fs';

function readFile (){
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        var input = data
        useDictionary(input)
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
    let regex = /[A-Za-z0-9._%+-]+@softwire\.com/g
    let found = input.match(regex)
    let count = found.length

console.log(count)
console.log(found);
}

function useDictionary (input) {
    let dictionary = {};
    //let regex = /[A-Za-z0-9._%+-]+@+[A-Za-z]\.com/g
    let regex = /(\w[\w\.-]*\w@[a-zA-Z\d\.-]+\.[a-zA-Z]+)/g
    let found = input.match(regex)
    let count = found.length
    console.log(count)
    console.log(found)


}

readFile()


