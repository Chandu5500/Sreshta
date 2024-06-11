const express = require('express')
const dotEnv = require('dotenv')
const { MongoClient } = require('mongodb')

const app = express()

dotEnv.config()

MongoClient.connect(process.env.MONGO_URI )
    .then(()=>{
        console.log("MongoDB Connected Succesfully!")
    })
    .catch((error)=>{
        console.log("Error: ", error)
    })

const PORT = 8000

//console.log(process.env)

app.listen(PORT, ()=>{
    console.log(`Server started and running at ${PORT}`)
})