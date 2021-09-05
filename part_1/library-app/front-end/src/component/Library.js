import React from 'react'
import axios from "axios"
import {useState} from "react"

const Library = ()=> {


const [tittle , setTittle] = useState("")
const [body ,setBody ] = useState("")
const [msg , setMsg] = useState("")


const creatNewBook =()=>{


axios.post("http://localhost:5000/books" , {tittle,body}).then((result)=>{
    console.log(result);
    setMsg("book added")
}).catch((err)=>{
    console.log(err)
})


}






    // get all the book that i have i in data base 
  const getAllbook = ()=>{
axios.get("http://localhost:5000/books").then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err)
})

}
  
  // get spicific book by id 

const getoneBook = ()=>{

}



    return (<>

      
<>

<input placeholder="tittle the book " onChange={(e)=>{
    setTittle(e.target.value)
}}></input>
<input placeholder="paraghraph the book "onChange={(e)=>{
    setBody(e.target.value)
}} ></input>
<button onChange={()=>{
creatNewBook()
}}>creat new book </button>


</>





        <div> 
         <button onClick={()=>{
             getAllbook()
         }}> get all books </button>
  {
    result.map((element) => {
        return (<>

<p>{element.title}</p>
<p>{element.author}</p>
           


        </>)
    })
  }
        </div>
    
    </>)
}
  








export default Library



