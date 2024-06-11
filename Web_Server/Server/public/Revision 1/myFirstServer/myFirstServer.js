var http=require("http");

var server= http.createServer((request, response)=>{
    var data={name: "Chandu", age: 20, gender: "Male"};
    data=JSON.stringify(data);
    //response.write("Hello! our first server got created");

    response.writeHead(200, {'content-type': 'text/html'})


    response.write("<b>Hello</b>");
    response.end();
});

server.listen(8081, ()=>{
    console.log("Server is listening at 8081");
});