require('dotenv').config()
const express=require('express')
const app= express()
const PORT = process.env.PORT || 3000

const myMiddleWare = (req,res,next)=>{
    console.log("Middleware function")
    req.currentTime = new Date(Date.now())
    next()
}
app.use(myMiddleWare)
app.use(express.static("public"))

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})

app.get("/",(req,res)=>{
    console.log("I am home"+req.currentTime)
    res.send("Hello I am home route")
})

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.use("*",(req,res)=>{
    res.status(404).send({
        message:"not a Valid Route" 
    })
})
