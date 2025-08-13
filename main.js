import mongoose from "mongoose"
import express from "express"

let a = await mongoose.connect("mongodb+srv://<bhuwan>:<bhuwan>@cluster0.pfhifoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const app = express

const port= 3000

app.get('/', (req, res)=>{
    res.send("Hello, World")
})

app.listen(port, ()=>{
    console.log(`listening ot port ${port}`)
})


