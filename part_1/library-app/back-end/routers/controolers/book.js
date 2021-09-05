const bookModel = require("./../../model/book")

const creatnewBook = (req,res)=>{

const { title,
author,
pages,
publisher,
 published_at } = req.body 
    
 
 
 
 const newbook = new bookModel({
    title,
    author,
    pages ,publisher,published_at
 })

 newbook.save().then((result)=>{
     res.status(200).json(result)
 }).catch((error)=>{
     throw error
 })




}



const getAllBooks = (req,res)=>{

    bookModel.find({}).then((result)=>{
        res.status(200).json(result)
    }).catch((error)=>{
        throw error
    })


}


const getById = (req,res)=>{


    const id = req.params.book_id
    bookModel.find({id:_id}).then((result)=>{
        res.status(200).json(result)
    }).catch((error)=>{
        throw error
    })


}


const dleteByid =  (req,res)=>{


    const id = req.params.book_id
    bookModel.findByIdAndDelete({id:_id}).then((result)=>{
        res.status(200).json(result)
    }).catch((error)=>{
        throw error
    })


}





module.exports = {creatnewBook ,getAllBooks ,getById ,dleteByid}