// synchronous code 

const fs = require("fs"); // import fs module 

const content1=fs.readFileSync("./week 2/Day 3/a.txt", "utf-8"); // then control will came here and read the file a.txt 
// nd wait till the task is completed before moving to the next task
console.log(content1); // after read opn complete the log it out 

const content2=fs.readFileSync("./week 2/Day 3/b.txt", "utf-8"); // then read the file and wait to complete it before move to the next task 
console.log(content2);
