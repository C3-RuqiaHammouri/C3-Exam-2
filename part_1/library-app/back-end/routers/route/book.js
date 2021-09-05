 const express = require("express")
const {creatnewBook ,getAllBooks ,getById ,dleteByid} = require("./../controolers/book")




 const bookRouter = express.Router()

 bookRouter.post("/books" , creatnewBook)
 bookRouter.get("/books"  ,getAllBooks)
 bookRouter.get("/books/:book_id" ,getById)
 bookRouter.delete("/books/:book_id",dleteByid)

 module.exports = bookRouter