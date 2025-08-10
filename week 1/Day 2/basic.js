// features of javaScript
// --> Interpreted:js is an interpreated language , meaning it executes line by line at runtime by the js engine in the browser or server environment rather than being compiled into m/c code beforehand 
// --> Dynamically typed : variables in js are not bounded to specific data type,types are detaermined at runtime and can change as the program executes .
// --> single threaded : 
// --> Garbage collection


// SYNTAX OF JAVASCRIPT
// Variable is used to store data . In Js , there are three way to declare a variable ... let , const , var 

let firstName = "shami";     // Variable that can be reassigned 
const n = 10 ;          // Constat varible that canniot be reassigned 
var isStudent = true ;  // Older way to declare a variable ; scope function
console.log(firstName);

// data types 
let number = 20;        // integer 
let name = "Shami";     // string
let isActive = false ;  // boolean
let nums = [20, 30, 50] // array


// operators 
let sum = 2+3;           // addition operator 
let isEqual = (10===10); // comparison operator
let isTrue = (true && false); // logical operator  
console.log(sum);
console.log(isEqual);
console.log(isActive);



// function 
function sumfun(a,b){
    return a+b;
}

let ans1=sumfun(1,6);
console.log(ans1);


// if-else
let numb = 105 ;
if(numb>100){
    console.log("more then hunderd");
}
else{
    console.log("less then hundered");
}



// while loop 

console.log("Hi There !");
let a = 1;
while(a<5){
   console.log(a);
   a++;
}

// for loop 
console.log("for loops");
for(let i=0 ; i<5 ; i++){
    console.log(i);
}


// complex data types 
//OBJECTS : objects in js ia the collection of key value pair , in which key is a sting and eacch value can be any valid js datatypes , including another object 

let user = {
    name:"shami",
    age:17 ,
    gander: "male"
}

console.log(user.name+" age is "+user.age);