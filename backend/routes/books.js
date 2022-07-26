// restful endpoint
const express = require('express')
const router = express.Router()
const Book = require('../models/books')


// get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


// get one book
router.get('/:id', getBook, (req, res) => {
    res.send(res.book)
})


// create a book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
    })

    try {
        const newBook = await book.save()
        res.status(201).json(newBook) // 201 means book created
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


// update one book
router.patch('/:id', getBook, async (req, res) => { // patch instead of update because we are only changing one field
    if (req.body.title != null) {
        res.book.title = req.body.title
    }
    if (req.body.author != null) {
        res.book.author = req.body.author
    }

    try {
        const updatedBook = await res.book.save()
        res.json(updatedBook)
    } catch (err) {
        res.status(400).json({message: err.message}) // 400 means client supplied invalid data
    }
})


// self explanatory 😂
router.delete('/:id', getBook, async (req, res) => {
    try {
        await res.book.remove()
        res.json({message: 'Deleted Book'})
    } catch (err) {
        res.status(500).json({message: err.message}) // 500 means it's not you it's me (Not a break up line, it is a server error lol)
    }
})


// middleware to fetch book
async function getBook(req, res, next) {
    let book
    try {
        book = await Book.findById(req.params.id)
        if (book == null) {
            return res.status(404).json({message: 'Cannot find subscriber'})
        } 
    } catch (err) {
        return res.status(500).json({message: err.message}) // server side error
    }
    res.book = book
    next()
}


module.exports = router