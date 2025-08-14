// Promisified version of readFile
const fs = require("fs");


function readTheFile(sentTheFinalValueHere){
    fs.readFile("./week 2-Async-promise/Day 4/a.txt","utf-8", function(err, data){
        sentTheFinalValueHere(data);
    });
}

// defining the promise 
function readFile( fileName){
    return new Promise(readTheFile);
}

// using the promise 
const p = readFile("./week 2-Async-promise/Day 4/a.txt");

function callback(content){
    console.log(content); 
}

p.then(callback);