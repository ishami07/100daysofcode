 // setTimeout is a function that takes a callback function and a time in milliseconds as arguments.

// *******It waits for the specified time and then executes the callback function.***********

console.log("Hello!");

function timeout() {
  console.log("waiting");
}

// call setTimeout function with run function and 1000ms as arguments
// setTimeout(callback, time in ms);
setTimeout(timeout, 1000); 

// syntaxx:-  setTimeout( callbackFunction , time)

console.log("Welcome to Haryana !");
