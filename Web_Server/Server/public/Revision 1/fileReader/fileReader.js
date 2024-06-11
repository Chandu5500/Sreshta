var http= require("http");

var server=http.createServer((request, response)=>{
    response.writeHead(200, {'content-type': 'text.json'});
    var data={
        name: "Chandu",
        age: 20,
        gender: "Male"
    };
    response.write(JSON.stringify(data));
    response.end();

});

server.listen(8081, ()=>{
    console.log("Server is listening at 8081");
})