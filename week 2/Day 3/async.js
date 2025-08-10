// Asynchronous code 

const fs = require("fs"); // import fs module 

fs.readFile("./week 2/Day 3/a.txt", "utf-8" , function(err, content){  // start reading the file and move to the next line, not waitng for completion of task  
    console.log(content);                                                  // when the reading is done the function is call and log out the content of the file 
});


fs.readFile("./week 2/Day 3/b.txt", "utf-8", function(err, content){
    console.log(content);
}); // start reading the file and does not wait to complete it, nd move to the next line  

console.log("last line!")

// then control will came here and read the file a.txt 
// nd wait till the task is completed before moving to the next task