import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  change_bookShelf = (e) => {
    this.props.onUpdate(e.target.value)
  }

  render() {
    const book = this.props.book
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.thumbnail}")`
            }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.change_bookShelf} value={book.shelf}>
                {// Changed the option value
                }
                <option value="na" disabled>Move to</option>
                <option value="currentlyReading">On it</option>
                <option value="wantToRead">Wishlist</option>
                <option value="read">Done</option>
                <option value="none">None</option>
                
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book;
