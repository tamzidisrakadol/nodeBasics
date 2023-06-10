const express = require('express')
const app = express()

//http methods = get(Read) , post(Create) , put(update) , delete(delete)

app.get("/",(req,res)=>{
    res.send("I am get request at home page")
    res.end()
})
app.post("/",(req,res)=>{
    res.send("I am post request at home page")
    res.end()
})
app.put("/",(req,res)=>{
    res.send("I am put request at home page")
    res.end()
})
app.delete("/",(req,res)=>{
    res.send("I am delete request at home page")
    res.end()
})


module.exports = app