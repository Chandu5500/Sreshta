const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')
const cors = require('cors');

const app = express()

app.use(cors());

const PORT = process.env.PORT || 8080

dotEnv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB Connected Succesfully!")
    })
    .catch((error)=>{
        console.log(`${error}`)
    })

app.use('/employees', employeeRoutes)

app.listen(PORT, ()=>{
    console.log(`Server started successfully and running at ${PORT}`)
})