// load environment variables
require('dotenv').config()
// imports
const express = require('express')
const mongoose = require('mongoose')


// initialize app
const app = express()
// setup db
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))


// middleware
//setup server to use JSON
app.use(express.json())


// routes
const booksRouter = require('./routes/books')
app.use('/books', booksRouter)


// start server
app.listen(process.env.PORT, () => console.log('server started'))