var http= require("http");
var fs= require("fs");
const { response } = require("express");

var server=http.createServer((request, response)=>{
    response.writeHead(200, {'content-Type': 'text/text'});

    fs.appendFile("xyz.txt", "Item_2", (error)=>{
        if(error){
            console.log("Error while adding the data");
        }else{
            response.write("Content was added");
        }
        response.end();
    })
});

server.listen(8081, ()=>{
    console.log("Server is listening at 8081")
})