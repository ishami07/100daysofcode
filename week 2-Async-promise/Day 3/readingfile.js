// reading file 

const fs=require("fs");

const content = fs.readFileSync("./week 2/Day 3/a.txt", "utf-8"); // reading file synchronously 
console.log(content);

