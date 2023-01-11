const mongoose = require('mongoose')

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://ideotic12:ideotic12@cluster0.pe2mz5o.mongodb.net/?retryWrites=true&w=majority")
}