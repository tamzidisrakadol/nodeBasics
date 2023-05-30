const fs = require('fs'); //fs= file system


//to write in a file 
// fs.writeFile('demo.txt',"this is sample text for file system,rewrite by tamzid israk checking code its running or not",(err)=>{

//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

//adding line in existing file 
// fs.appendFile('demo.txt',"\n this is append function checking its adding the line or not ",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })


//reading the file 
fs.readFile('demo.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})


//fs.unlink = to delete the file 
//fs.rename = to rename the existing file
//fs.exits = check the file exist or not 