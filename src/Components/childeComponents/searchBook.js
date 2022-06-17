import React from 'react'
import Book from './Book'


const searchBook = (props) => {

    let search = props.search;
    let booksSearch  = props.booksSearch;
    let changeSheif = props.changeSheif;
        return (

            <ul className="books-grid">
                {
                    search.length ?  (
                    booksSearch.map( (book) =>(

                          <div key={book.id}>
                          <Book book={book} changeSheif={changeSheif}/>
                         </div>
                    )
      
                       
                       )
                    ) :null
                }
                </ul>
     
      )
    }
  


export default searchBook
