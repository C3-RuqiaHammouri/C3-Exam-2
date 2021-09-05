const mongoose = require("mongoose")



const bookSchema = new mongoose.Schema({
    title : {type:String},
     author:{type:String},
     pages:{type:String},
     publisher:{type:String},
      published_at:{type:String}

})


const bookModel = mongoose.model("Book" ,bookSchema )

module.exports = bookSchema