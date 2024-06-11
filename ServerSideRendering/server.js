const express = require('express')
const dotEnv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const employeeRoutes = require('./routes/employeeRoutes')
const cors = require('cors');
const ejs = require('ejs');

const app = express()

app.use(cors());

const PORT = process.env.PORT || 7000

app.set('view engine', 'ejs')

dotEnv.config()

app.use(bodyParser.json())

//Client Side Rendering
app.get('/pineapple', (req,res)=>{
    res.json({fruit: "PineApple"})
})

//Server Side Rendering
app.get('/grapes', (req,res)=>{
    res.send("<h1>This grapes fruit</h1>")
})

app.get('/sample', (req, res)=>{
    res.render('samplePage')
})

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