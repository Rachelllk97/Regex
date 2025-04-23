import fs from 'fs';

function readFile (){
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        var input = data;
        useDictionary(input);
        topTen
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
    let email_domain = "@softwire.com";
    let regex = /[A-Za-z0-9._%+-]+@softwire\.com/g;
    let found = input.match(regex);
    let count = found.length;

}

function findCharIndex(email, char) {
    for (let i = 0; i < email.length; i++){
        if(email[i] === "\@"){
            return i;
    }

}
}

function useDictionary (input) {
    let dictionary = {};
    let regex = /(\w[\w\.-]*\w@[a-zA-Z\d\.-]+\.[a-zA-Z]+)/g;
    let found = input.match(regex);
    let count = found.length;
    found.forEach((email, i) => {
        let domainIndex = findCharIndex(email, i)+1;
        let domain = email.substring(domainIndex,email.length);
        if (dictionary[domain]) {
            dictionary[domain] ++;
        } else {
            dictionary[domain] = 1;
        }
         
    })
    console.log(dictionary);
}

//found index of @
//next:
//find remaining characters after @
//push remainig characters to an object 
//add a frequency count per characters 
//check if characters exist in object before adding or increasing frequency count 


readFile()


