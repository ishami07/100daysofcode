// create a function that take an array of object as input and return the users whose age is greater then 18 and are male ;

function nameFun(users){
    let arr=[];
    for(let i=0 ;i<users.length; i++){
        if(users[i].age>=18 && users[i].gender === "male"){
        arr.push(users[i].name);
    } 
    }
    return arr;
}

const users = [
    {
        name:"shami",
        age:77,
        gender:"male"
    },
    {
        name:"muskan",
        age:22,
        gender:"female"
    },
    {
        name:"harkirat",
        age:32,
        gender:"male"
    }
];

let ans = nameFun(users);
console.log(ans);

// using filter function and map function 

// The filter() method creates a new array containing only the elements from the original array that satisfy a provided test condition.
// It iterates through each element, and if the callback function returns true for that element, it is included in the new array; 
// otherwise, it is excluded.

// The map() method creates a new array by applying a provided function to each element of the original array. 
// It transforms each element based on the logic within the callback function and collects the results into a new array of the same length as the original. 

const ans2 = users.filter(users=> users.age>=18 && users.gender==="male").map(users=> users.name);

console.log(ans2);