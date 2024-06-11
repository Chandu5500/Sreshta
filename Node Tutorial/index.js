const fs = require('fs')

// fs.readFile("demo.txt", "utf8", (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
// })

// fs.writeFile("example.html", "utf8", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File Created Successfully")
// })

const sampleTxt = "My name is Chandu, I'm wrtting Dynamic Content"

// fs.writeFile("example.html", sampleTxt, (err)=>{
//     if(err){
//         console.log(err)    
//     }else{
//         console.log("File Content is Success");
//     }
// })

// fs.rename("example.html", "updatedName.txt", (err)=>{
//     if(err){
//         console.log(err)    
//     }else{
//         console.log("Updated Successfully");
//     }
// })

fs.unlink("updatedName.txt", (err)=>{
    if(err){
        console.log(err)    
    }else{
        console.log("Deleted Successfully");
    }
})