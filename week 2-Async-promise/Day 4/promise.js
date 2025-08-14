// Promises 

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous 
// operation and its resulting value. Promises are used to handle asynchronous operations more effectively 
// than traditional callback functions, providing a cleaner and more manageable way to deal with code 
// that executes asynchronously, such as API calls, file I/O, or timers.

// function waitFor3S(resolve){
//     setTimeout(resolve , 3000);
// }
// function main(){
//     console.log("after wait for 3 sec");
// }

// waitFor3S(main);


// function random(){

// }
// let p = new promise(random);
// console.log(p);


// creating promisefied verssion of the setTimeOut function 

// function random(resolve){
//     setTimeout(resolve,3000);
// }

// const p = new Promise(random);

// function callback(){
//     console.log("promise suceed !");
// }

// p.then(callback);
