var http= require("http");
var fs= require("fs");

var server= http.createServer((request, response)=>{
    response.writeHead(200, {'content-Type': 'text/text'});

    fs.writeFile("abc.txt", "Hello! this file is from abc file", (error)=>{
        if(error){
            console.log("Error while adding data");
        }else{
            response.write("Content add to the file");
        }
        response.end();
    });

});

server.listen(8081, ()=>{
    console.log("Server is listening at 8081");
})