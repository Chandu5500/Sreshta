const Employee = require('../models/Employee')

const createEmployee = async(req, res)=>{
    try{
        const {name, email, phone, city} = req.body

        const employee = new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save() //Above we are using async so we must use await, employee.save() to save in our database
        res.status(201).json(employee)
    }
    catch(error){
        console.log("There is an error: ", error)
        res.status(500).json({Message: "Server Error"})
    }
}

const getEmployees = async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    }catch(error){
        console.error("There is an Error", error)
        res.status(500).json({Message: "Server Error"})
    }
}

const singleEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({Message: "Employee Not Found"})
        }

        res.status(200).json(employee)
    }catch(error){
        console.error("There is an error", error)
        res.status(500).json({Message: "Server Error"})
    }
}

const updateEmployee = async(req,res)=>{
    try{
        const { name, email, phone, city } = req.body

        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id, 
            { name, email, phone, city}
        )
        if(!myEmployee){
            return res.status(404).json({Message: "Employee not found"})
        }
        res.status(200).json(myEmployee)
    }catch(error){
        console.error("There is an error", error)
        res.status(500).json({Message: "Server Error"})
    }
}

const deleteEmployee = async(req,res)=>{
    try{
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        res.status(204).send()
    }catch(error){
        console.error("There is an error", error)
        res.status(500).json({Message: "Server Error"})
    }
}

module.exports = { createEmployee, getEmployees, singleEmployee, updateEmployee, deleteEmployee }