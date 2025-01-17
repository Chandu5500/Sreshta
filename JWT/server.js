const express = require('express')
const jwt = require('jsonwebtoken')
const dotEnv = require('dotenv')
const ejs = require('ejs')

const app = express()

const PORT = 3000

app.use(express.json())

dotEnv.config()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const secretKey = process.env.mySecretKey

const users = [{
    id: "1",
    username: "Mahesh",
    password: "Mahesh",
    isAdmin: true
},
{
    id: "2",
    username: "Suresh",
    password: "Suresh",
    isAdmin: false
}]

const verifyUser = (req, res, next)=>{
    const userToken = req.headers.authorization
    if(userToken){
        const token = userToken.split(" ")[1]
        jwt.verify(token, secretKey, (err,user)=>{
            if(err){
                return res.status(403).json({err: "Token is not Valid"})
            }
            req.user = user
            next()
        })
    }else{
        res.status(401).json("You are not Authenticated")
    }
}

app.post('/api/login', (req,res)=>{
    const {username, password} = req.body;

    const user = users.find((person)=>{
        return person.username === username && person.password === password
    })
    if(user){
        const accessToken = jwt.sign({
            id: user.id,
            username: user.username,
            isAdmin: user.isAdmin
        }, secretKey)
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken
        })
    }else{
        res.status(401).json("User Credential Not Matched")
    }
})

app.delete('/api/users/:userId', verifyUser, (req,res)=>{
    if(req.user.id === req.params.userId || req.user.isAdmin){
        res.status(200).json("User is deleted Succesfully")
    }else{
        res.status(401).json("You are not Allowed to Delete")
    }
})

app.get("/mahesh",(req,res)=>{
    res.render("mahesh")
})

app.get("/suresh",(req,res)=>{
    res.render("suresh")
})

app.get('/api/login/:userId', (req, res)=>{
    const userId = req.params.userId
    if(userId){
        if(userId === "1"){
            res.redirect('/mahesh')
        }else if(userId === "2"){
            res.redirect('/suresh')
        }
    }else{
        res.status(403).json("User not found")
    }
})

app.post('/api/logout',(req,res)=>{
    const userToken = req.headers.authorization
    if(userToken){
        const token = userToken.split(" ")[1]
        if(token){
            let allTokens = []
            const tokenIndex = allTokens.indexOf(token)
            if(tokenIndex !== -1){
                allTokens.splice(tokenIndex, 1)
                res.status(200).json("Logout Succesfully")
                res.redirect('/')
            }else{
                res.status(400).json("You are not Valid user")
            }
        }else{
            res.status(400).json("Token not found")
        }
    }else{
        res.status(400).json("You are not Authenticated")
    }
})

app.get('/api/logout',(req,res)=>{
    res.redirect('/')
})

app.get('/',(req,res)=>{
    res.render('welcome')
})

app.listen(PORT, ()=>{
    console.log(`Server started and Running at ${PORT}`)
})