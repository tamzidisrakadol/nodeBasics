const http = require('http')
const fs = require('fs')
const port = 3000
const hostName ='127.0.0.1'



//routing 
const server = http.createServer((req,res)=>{

    const handleReadFile = (statusCode,filelocation)=>{
        fs.readFile(filelocation,(err,data)=>{
            res.writeHead(statusCode,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }

   if(req.url === '/'){
        handleReadFile(200,"index.html")
   }
   else if(req.url === '/about'){
    handleReadFile(200,"about.html")
   }
   else if(req.url === '/contact'){
    handleReadFile(200,"contact.html")
   }else{
    handleReadFile(404,"Error.html")
   }
})

server.listen(port,hostName,()=>{
  console.log(`Server is running at http://${hostName}:${port}`)
})
