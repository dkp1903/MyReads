import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './Utils/BooksAPI'
import ListBook from './Components/List_Book'
import BookSearch from './Components/Book_Search'
import './App.css'

class BooksApp extends Component {
  state = {
    Books: []
  }

  componentDidMount() {
    this.fetch_books_details()
  }

  fetch_books_details = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    })
  }

  update_books_details = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetch_books_details()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (<ListBook books={this.state.Books} onChange={this.update_books_details}/>)}/>
        <Route exact path="/search" render={({history}) => (<BookSearch onChange={this.update_books_details} myBooks={this.state.Books}/>)}/>
      </div>
    )
  }
}

export default BooksApp
