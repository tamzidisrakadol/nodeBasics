//built in module (http)
// to exist server (ctrl + c)
/*
http status code 
information response -> 100-109
Successful response -> 200-299
Redirects -> 300-399
Client error-> 400-499
Server error -> 500-599
 */

const http = require('http')
const port = 3000
const hostName = '127.0.0.1'  //local host ip


//it will create http server 
const myServer = http.createServer((req,res) => {
  //  res.setHeader("This is our first Node Server.Checked")
    res.writeHead(202,{'Content-Type':'text/html'})
    res.write("<h1> HELLO NODE Server  </h1>")
    res.end()
})


//it will check the server running or not   
myServer.listen(port,hostName,() => {  
    console.log(`Server is running at http://${hostName}:${port}`)   // ` => use this for adding in string 
})