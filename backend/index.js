import express from "express";
import mysql from "mysql";

const app = express()

const db=mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"13962331322cdp",
  database:"books"
})

app.listen(8800,()=>{
  console.log("herzliche welcome !")
})
