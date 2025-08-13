import mongoose from "mongoose"
import express from "express"
import { Book } from "./models/books.js"

await mongoose.connect("mongodb+srv://bhuwan:bhuwan@cluster0.pfhifoi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const app = express()
app.use(express.static('dashboard')) 
app.use(express.json()) // To parse JSON bodies

const port = 3000

// CREATE
app.post('/books', async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()
        res.status(201).json(book)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

// READ ALL
app.get('/books', async (req, res) => {
    const books = await Book.find()
    res.json(books)
})

// READ ONE
app.get('/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({ error: "Book not found" })
        res.json(book)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

// UPDATE
app.put('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!book) return res.status(404).json({ error: "Book not found" })
        res.json(book)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

// DELETE
app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if (!book) return res.status(404).json({ error: "Book not found" })
        res.json({ message: "Book deleted" })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})