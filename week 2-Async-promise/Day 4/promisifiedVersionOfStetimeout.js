// promisified version of setTimeout 

// function doAsyncOp(resolve){
//     setTimeout(resolve,3000);
// }
// function promisifiedSetTimeout(){
//     return new Promise(doAsyncOp);
// }

// const p = promisifiedSetTimeout();
// function callback(){
//     console.log("thimeout is passed !!"); 
// }
// p.then(callback);



// Another Way to write 

// function setTimeoutPromisified(time){
    
//     return new Promise(function() {
//         setTimeout(callback,time);
//     });
// }

// const p = setTimeoutPromisified(10000);
// function callback(){
//     console.log("timer is completed !!");
// }
// p.then(callback);



// ANOTHER EXAMPLE 
const p = new Promise (function (resolve){
    let count = 0;
    console.log("promise function called !")
    for (let i = 0; i < 1000; i++) {
        console.log(count++);  
    }
    resolve();
});

function callback(){
    console.log("operations is completed !!");
}
p.then(callback);