const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://sakhimeyiwa1998:sakhi123@municipality.dlqm3.mongodb.net/?retryWrites=true&w=majority&appName=Municipality")

        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log("Connect to DB")
        })

        connection.on('error',(error)=>{
            console.log("Something is wrong in mongodb ",error)
        })
    } catch (error) {
        console.log("Something is wrong ",error)
    }
}

module.exports = connectDB
