// creating an  http server 
// using express --> its not a node default library we have to install it manually in our m/c 
//  rum commamd --> npm install express 


const express = require("express");
const app = express();

function sum(n){
  let ans=0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", function(req, res){
  const n=req.query.n;
  const result = sum(n);
  res.send("Hi your ans is "+ result);
})

app.listen(3000); // listening on port no. 3000 
