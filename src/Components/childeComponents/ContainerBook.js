import React  from 'react'
import Book from './Book'

const ContainerBook = (props) => {
  let nameSection = props.nameSection;
  let allBooks = props.allBook;
  let category = props.category;
  let categoryFilter = allBooks.filter((book) => book.shelf === category);
  let changeSheif = props.changeSheif ; 
  return (
    <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{nameSection}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {categoryFilter.map((book) => {
                      return (
                        <li key={book.id}>
                        <Book  book={book} changeSheif={changeSheif}/>
                        </li>
                      )
                    })}
                    </ol>
                  </div>
                </div>
    </div>
  )
}

export default ContainerBook
