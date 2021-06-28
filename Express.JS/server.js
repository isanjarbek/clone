const express = require('express')
const path = require('path')
const books = require('./books')
const logger = require('./middlewares/logger')

const app = express()

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })



app.use(logger)

// Get all books
app.get('/api/books',(req, res) => {
    res.json(books)
})

// Get one books by id
app.get('/api/books/:id', (req, res)=> {
    res.json(books.filter(books => books.id == req.params.id))
})

// Papkani statik qilish
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))