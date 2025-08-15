function setTimeOutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}


// callback hell

// setTimeout(function() {
//     console.log("hi");
//     setTimeout(function() {
//         console.log("hello");
//         setTimeout(function() {
//             console.log("hi there");
//         },5000)
//     },3000)
// },1000);



// method-1 to remove callback hell 

// function step3Done(){
//     console.log("Hi there");
// }

// function step2Done(){
//     console.log("Hello");
//     setTimeout(step3Done,5000);
// }
// function step1Done(){
//     console.log("Hi");
//     setTimeout(step2Done,3000);
// }
// setTimeout(step1Done,1000);



// promisified version to remove callback hell

// setTimeOutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeOutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeOutPromisified(5000).then(function(){
//             console.log("hi there");
//         })
//     })
// });



