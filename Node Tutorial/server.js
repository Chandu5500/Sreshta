const http = require('http')
const myServer = http.createServer((request,response)=>{
    response.write("Welcome to Server");
    response.end();
})

myServer.listen(5500)