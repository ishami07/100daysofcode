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

// using filter function 

const ans2 = users.filter(users=> users.age>=18 && users.gender==="male").map(users=> users.name);

console.log(ans2);