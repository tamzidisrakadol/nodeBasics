const express = require('express')
const app = express()
const port  = 3001.
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post("/user",(req,res)=>{
    const name = req.body.name
    res.send(`WELCOME ${name}`)
})


//routing with get() and send a text in the page
//http request with query parameter
app.get("/",(req,res)=>{
    // const id = req.query.id  // getting id by query 
    // const name = req.query.name // getting name by res.query
    const {id,name} = req.query  // same info with differnt approach
    res.send(`<h1>I am home page \n Student id is ${id} & student name is ${name} </h1>`)
})

//http request with route parameter
app.get("/server/billID/:billID/customerID/:cID",(req,res)=>{
    const billID = req.params.billID
    const cID = req.params.cID
    res.send(`<h1>Customer section bill id = ${billID} & customer id = ${cID}</h1>`)
})


//http request with headers
app.get("/header",(req,res)=>{
    const bankID = req.header('bankId')
    const cName = req.header('cName')
    res.send(`<h1>Results are ${bankID} & ${cName}</h1>`)
})

//creating the server with given port
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

