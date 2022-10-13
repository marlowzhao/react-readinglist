import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

const db=mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789zjs",
  database: "books"
})
// allows us to send json
app.use(express.json())
// uses cors
app.use(cors())

app.get("/", (req, res)=>{
  res.json("hello, welcome to the backend")
})

// index
app.get("/books", (req, res)=>{
  const q="SELECT * FROM booklist"
  db.query(q, (err, data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

// post
app.post("/books", (req,res)=>{
  const q= "INSERT INTO booklist (`title`,`review`,`cover`,`author`) VALUES (?)"
  const values = [
    req.body.title,
    req.body.review,
    req.body.cover,
    req.body.author
    ]
  db.query(q, [values], (err, data)=>{
    if(err) return res.json(err)
    return res.json("book has been created")
  })
})

// delete a book
app.delete("/books/:id",(req, res)=>{
  const bookId = req.params.id
  const q = "DELETE FROM booklist WHERE id= ?"
  db.query(q, [bookId], (err, data)=>{
    if(err) return res.json(err)
    return res.json("the selected book has been deleted")
  })
})

app.listen(8800,()=>{
  console.log("herzliche welcome !")
})
