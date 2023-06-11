const express = require('express')
const app = express()
const routes = require("./routes/users.routes")
//http methods = get(Read) , post(Create) , put(update) , delete(delete)



app.use("/api/user",routes)


app.get("/",(req,res)=>{
    res.statusCode = 200
    res.sendFile(__dirname+"/views/index.html")
    res.cookie("name","Tamzid")
    res.cookie("key",3641)
    res.append("id",42563)
})


app.use((req,res)=>{
    res.send("<h1>404 Null Request</h1>")
})



// app.post("/",(req,res)=>{
//     res.send("I am post request at home page")
//     res.end()
// })
// app.put("/",(req,res)=>{
//     res.send("I am put request at home page")
//     res.end()
// })
// app.delete("/",(req,res)=>{
//     res.send("I am delete request at home page")
//     res.end()
// })


module.exports = app