const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    //name, email, phone, city
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        default: false
    },
    city:{
        type: String,

    }
})

module.exports = mongoose.model('Employee', employeeSchema)