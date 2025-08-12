// Promisified version of readFile
const fs = require("fs");


function readTheFile(sentTheFinalValueHere){
    fs.readFile("a.txt","utf-8", function(err, data){
        sentTheFinalValueHere(data);
    });
}

// defining the promise 
function readFile( fileName){
    return new Promise(readTheFile);
}


// using the promise 
const p = readFile();

function callback(content){
    console.log(content); 
}

p.then(callback);