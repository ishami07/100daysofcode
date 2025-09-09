// write a node js program that reads a file (takes a file as input) and counts the number of lines or number of words as ouptut
// use commander to build the cli           



// learning syntax of commander 

// const fs = require("fs");
// const {Command} = require('commander') ;
// const program = new Command();

// program 
//     .name("simple-cli")
//     .version("1.0.0")
//     .description("simple Cli for file manipulation")

//     program.command("count")
//         .description("count the number of lines in a file")
//         .argument("file",'file to count')
//         .action((file) =>{
//             fs.readFile(file,utf-8,(err,data) =>{
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     let word = 0;
//                     for(let i=0; i<data.length; i++){
//                         if(data[i]==="\n"){
//                             word++;
//                         }
//                     }
//                     console.log("the total number of line are "+ word);
//                 }
//             })
//         })


// program.parse(process.argv);
    


// main code begins here

const fs = require("fs");
const {Command} = require("commander");
const program = new Command();

program
    .name("simple-cli")
    .version("1.0.0")
    .description("simple CLI for file manipulation")
    
    program.command("count_word")
         .description("count the number of lines in a file")
         .argument("file",'file to count')
         .action((file) =>{
            fs.readFile(file,"utf-8",function(err,data){
                if(err){
                    console.log("file not found error!!!" + err);
                }
                else{
                    let word = 0;
                    for(let i=0; i<data.length; i++){
                        if(data[i]===" "){
                            word++;
                        }
                    }
                    console.log("the total no. of word in the file are: "+ (word+1));
                }
            })
         })


         program.command("count_line")
         .description("count the number of lines in a file")
         .argument("file",'file to count')
         .action((file) =>{
            fs.readFile(file,"utf-8",function(err,data){
                if(err){
                    console.log("file not found error!!!" + err);
                }
                else{
                    let word = 0;
                    for(let i=0; i<data.length; i++){
                        if(data[i]==="\n"){
                            word++;
                        }
                    }
                    console.log("the total no. of word in the file are: "+ (word+1));
                }
            })
         })

program.parse(process.argv);      


