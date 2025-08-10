// program to reading multiple file synchronously

const fs = require("fs");
const obj1 = fs.readFileSync("./week 2/Day 3/a.txt","UTF-8");
console.log(obj1);

const obj2 = fs.readFileSync("./week 2/Day 3/b.txt","UTF-8");
console.log(obj2);