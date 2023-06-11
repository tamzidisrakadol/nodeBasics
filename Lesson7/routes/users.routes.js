const express = require('express')
const router = express.Router()
const app = express()


//router and routing


router.get("/register",(req,res)=>{
    res.status(200).json({
        "name":"Tamzid Israk",
        "Proffesion":"Android Developer",
        statusCode : 200

    })
})

router.get("/Login",(req,res)=>{
    res.send("I am get request at Login page")
    res.end()
})



module.exports = router