// reading file asynchronously 

const fs = require("fs"); // import fs module 

function print(err, content){    
    if(err){
        console.log("file not found !");
    }
    else{
        console.log(content);
    }
}

fs.readFile("./week 2/Day 3/a.txt", "utf-8" , print);

fs.readFile("./week 2/Day 3/b.txt", "utf-8" , print);

fs.readFile("./week 2/Day 3/tyty.txt", "utf-8" , print);

console.log("hello duniya ")