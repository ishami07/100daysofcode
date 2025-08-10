// Sum of first N numbers

function sum(n){
    sum=0;
    // for(let i=0; i<=n; i++ ){
    //     sum=sum+i;
    // }
    // return sum;

    return n*(n+1)/2;
}

const ans = sum(5);
console.log(ans)

// synchronous code is executed line by line , in the order it's written .
// Each operation is waitng for the previous one to complete before movingto the next one.