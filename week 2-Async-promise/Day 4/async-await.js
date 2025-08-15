// Async await syntax

// The async and await syntax in JavaScript provides a way to write asynchronous code that looks 
// and behaves like synchronous code, making it easier to read and maintain. 
// It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while 
// still working with asynchronous operations. async/await is essentially syntactic sugar on top of Promises. 

console.log("program start");
function setTimeOutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

async function main(){
    console.log("inside main fn");
    await setTimeOutPromisified(1000);
    console.log("Hi");
    await setTimeOutPromisified(3000);
    console.log("Hello");
    await setTimeOutPromisified(5000);
    console.log("Hi there !")
}

main();
console.log("end of the program");
