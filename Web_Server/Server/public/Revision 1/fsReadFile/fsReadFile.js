var http= require("http");
var fs= require("fs");

var server= http.createServer((request, response)=>{
    response.writeHead(200, {'content-Type': 'text/text'});

    fs.readFile("sample.txt", (error, fileData)=>{

        if(error){
            response.write("Error while searching for the file");
        }else{
            response.write(fileData);
        }
        response.end();
    });

});

server.listen(8081, ()=>{
    console.log("Server is listening at 8081");
})