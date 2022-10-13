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
    <div className="books-pg">
      <div className="books-pg-up">
        <h2 className="books-pg-ttl">My Reading List</h2>
        <p className="books-pg-sub-ttl">Add, Edit and Delete Your Books</p>
        <button className="book-new-crt"><Link to="/create">Create New Book</Link></button>
      </div>

      <div className="books-pg-btm">
      {books.map(book=>(
        <div className="book" key={book.id}>
          <div className="book-img">
            <img src={book.cover} alt="pic" />
          </div>

          <div className="book-txt">
          <p>{book.title} / {book.author}</p>
          <p>My Review:</p>
          <p>{book.review}</p>

          <button className="book-edit"><Link to="/edit">Edit</Link></button>
          <button className="book-delete" onClick={()=>handleDelete(book.id)}>Delete</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
