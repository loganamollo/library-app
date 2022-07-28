import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import Book from './components/Book'

export default function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)


  const getBooks = () => {
    // axios.get('http://localhost:9000/books/')
    //   .then((response) => {
    //     setBooks(response.data)
    //     console.log('fetched data')
    //     setLoading(false)
    //   })
    //   .catch((err) => console.log(err))
    axios.get('http://localhost:9000/books/')
    .then( response => {
      setBooks(response.data)
      console.log('books fetched')
    })
    .catch( err => console.log(err.message) )
    setLoading(false)
  }

  const makeBookTiles = () => {
    return books.map( book => {
      <p>{book.title}</p>
    })
  }
  
  return (
    <div>
      <h1>Library App</h1>
      <div>
        {
          loading ? <button onClick={ getBooks } >load books</button> : ''
        }
        {
          loading===false && books ? books.map( book =>{
            return (
              <Book key={book._id} book={book} />
            )
          }) : ''
        }
      </div>
    </div>
  )
}
