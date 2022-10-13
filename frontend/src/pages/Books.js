import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Books(){
  const [books, setBooks]=useState([])


  useEffect(()=>{
    const fetchAllBooks=async()=>{
      try{
        const res = await axios.get("http://localhost:8800/books")
        setBooks(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllBooks()
  }
  ,[])

  const handleDelete= async (id)=>{
    try{
      await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div>
      <h2>
        hi see all books
      </h2>
     <button><Link to="/create">Create New Book</Link></button>
      <div className="bookpage">
      {books.map(book=>(
        <div className="book" key={book.id}>
          <h2>{book.tittle}</h2>
          <h3>{book.author}</h3>
          <p>{book.review}</p>
          {book.cover && <img src={book.cover} alt="" />}
          <button><Link to="/edit">Edit Info</Link></button>
          <button onClick={()=>handleDelete(book.id)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}
