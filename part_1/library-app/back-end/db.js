// db

const mongoose = require("mongoose")


const options = {

     
}

mongoose.connect("mongodb://localhost:27017/DB_exam2" , options).then(()=>{
    console.log( " db is ready to use ");
}) , (error)=>{
throw error
}
