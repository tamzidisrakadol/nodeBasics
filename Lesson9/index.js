require('dotenv').config()
const express=require('express')
const app= express()
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

app.get("/",(req,res)=>{
    res.send("Hello I am home route")
})

app.use("*",(req,res)=>{
    res.status(404).send({
        message:"not a Valid Route" 
    })
})
