// Write a function called canVote which return true or false if the age of user is  >18 
function canVote(a){
    if(a<18){
        return false ;
    }
    return true;
} 
let ans = canVote(15);
console.log(ans);