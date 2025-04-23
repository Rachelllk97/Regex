import fs from 'fs';

function readFile (){
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) throw err;
        var input = data;
        useDictionary(input);
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
    topTen(dictionary);
}

function topTen(dictionary) {
    let sorted = [];
    let topTen = [];
    for (var domain in dictionary) {
        sorted.push([domain, dictionary[domain]]);
    }
    sorted.sort(function(a, b) {
    return b[1] - a[1];
    });

    for (let i=0; i<10; i++) {
        topTen.push(sorted[i])

    }
    console.log('The top ten domains are:')
    console.log(topTen);
}


readFile()


