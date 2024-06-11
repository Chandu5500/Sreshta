const express = require('express')

const app = express()

const PORT = 5000

const firstHandler = ((req,res,next)=>{
    if(20 < 30){
        next();
    }
})
const secondHandler = ((req,res,next)=>{
    if(20 > 30){
        next();
    }else{
        console.log("Sorry you are not allowed!")
    }
})
const thirdHandler = ((req,res,next)=>{
    if(10 < 30){
        next();
    }
})

app.get('/home', firstHandler, (req, res)=>{
    res.send("This is Home Page")
})
app.get('/about', secondHandler, (req, res)=>{
    res.send("This is About Section")
})
app.get('/user/:121', thirdHandler, (req, res)=>{
    res.send("You searched for the user 121")
})

app.listen(PORT, ()=>{
    console.log("Server started and running succesfully!")
})