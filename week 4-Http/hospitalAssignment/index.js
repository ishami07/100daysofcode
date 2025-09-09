const express = require("express");
const app = express();
app.use(express.json());

const user = [{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}]
app.get("/", function(req,res){
    const johnKidneys = user[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for(let i=0; i<noOfKidneys; i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys++;    
        }
    }
    noOfUnhealthyKidneys=noOfKidneys-noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })   
})

app.post("/" , function(req, res){
    let ishealthy = req.body.ishealthy;
    user[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        msg: "new kidney added !!"
    })
})

function isThereAtleastOneUnhealthyKidney(){
    // let unhealthykidneys = false;
    for(let i=0; i<user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            return true;
        }
        else{
            return false;
        }
    }
}

app.put("/", function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){
        const johnKidneys = user[0].kidneys;
        const noOfKidneys = johnKidneys.length;
        for(let i=0; i<noOfKidneys;i++){
            johnKidneys[i].healthy=true;
        }
        res.json({
            msg:"all kidneys are now healthy !!"
        })
    }
    else{
        res.status(411).json({
            msg:"No unhealthy kidneys are there!! "
        })
    }    
})

function isThereAtleastOneUnhealthyKidney(){
    // let unhealthykidneys = false;
    for(let i=0; i<user[0].kidneys.length; i++){
        if(!user[0].kidneys[i].healthy){
            return true;
        }
        else{
            return false;
        }
    }
}


app.delete("/", function(req,res){
    // you should return a 411 error
    // if altleat one unhealthy kidney is there do this otherwise return an error 411
    if(isThereAtleastOneUnhealthyKidney()){
        let newkidneys = [];
        for(let i=0; i<user[0].kidneys.length; i++){
            if(user[0].kidneys[i].healthy){
                newkidneys.push({
                healthy:true
            })
            }
        }
        user[0].kidneys = newkidneys;
        res.json({
            msg: "all unhealthy kidneys removed sucessfully !!"
        })
    }
    else{
        res.status(411).json({
            msg:"No unhealthy kidneys are there!! "
        })
    }
})

app.listen(3000);
