import React from 'react'
import { Link } from 'react-router-dom';
import SearchBook from './childeComponents/searchBook' 
const Search = (props) => {
  const  search = props.search;
  const booksSearch = props.booksSearch;
  const handleSearch = props.handleSearch;
  const changeSheif = props.changeSheif;
  const allBook = props.allBook;
  


  
  return (
    <div>
         <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search" >Close</Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author"
                  onChange={handleSearch} value={search}  />
                  <span >{search}</span>
              </div>
              <div className="search-books-results">
               </div>   
            </div>
            
             <SearchBook search={search} allBook={allBook} booksSearch={booksSearch} changeSheif={changeSheif} />  
            
          </div>
          
    </div>
  )
}

export default Search

