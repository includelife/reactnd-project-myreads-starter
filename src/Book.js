import React, { Component } from "react";
//import sortBy from 'sort-by'

class Book extends Component {
  render() {
    const { filteredBooks } = this.props
    // const filteredBooksWithOutImageUndefined =
    // filteredBooks.filter(filteredBook => (filteredBook.imageLinks === undefined))
    //filteredBooks.map(filteredBook => console.log(filteredBook))

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {filteredBooks.length > 0 &&
            filteredBooks.map(filteredBook => (
              <li key={filteredBook.id}>
                <div className="book">
                  <div className="book-top">
                    {filteredBook.imageLinks !== undefined &&
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${filteredBook.imageLinks.thumbnail})`
                        }}
                      />
                    }
                    {filteredBook.imageLinks === undefined &&
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                        }}
                      />
                    }
                    <div className="book-shelf-changer">
                      <select
                        name="shelf"
                        onChange={e => this.props.changeShelf(e, filteredBook)}
                        value={filteredBook.shelf}
                      >
                        <option value="disabled" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">
                          Want to Read
                        </option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">
                    {filteredBook.title}
                  </div>
                  <div className="book-authors">
                    {filteredBook.authors
                      ? filteredBook.authors.join(", ")
                      : ""}
                  </div>
                </div>
              </li>
            ))}
        </ol>
      </div>
    );
  }
}

export default Book
