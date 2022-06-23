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
                            

                    
                          <Book  key={book.id} book={ book} changeSheif={changeSheif}/>
                       
                    ) )
      
                       
                       
                    ) :null
                }
                </ul>
     
      )
    }
  


export default searchBook
