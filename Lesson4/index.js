//built in module (http)
// to exist server (ctrl + c)

const http = require('http')
const port = 3000
const hostName = '127.0.0.1'  //local host ip


//it will create http server 
const myServer = http.createServer((req,res) => {
  //  res.setHeader("This is our first Node Server.Checked")
    res.end("<h1> HELLO NODE </h1>")
})


//it will check the server running or not   
myServer.listen(port,hostName,() => {  
    console.log(`Server is running at http://${hostName}:${port}`)   // ` => use this for adding in string 
})