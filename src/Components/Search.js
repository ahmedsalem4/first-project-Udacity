import React from 'react'
import { Link } from 'react-router-dom';
import SearchBook from './childeComponents/searchBook' 
const Search = (props) => {
  const  search = props.search;
  const booksSearch = props.booksSearch;
  const handleSearch = props.handleSearch;
  const changeSheif = props.changeSheif;
  const  loadSearch = props.loadSearch  
  return (
    <div>
         <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author"
                  onChange={handleSearch}  value={search}/>
                  <span>{search}</span>
              </div>
              <div className="search-books-results">
               </div>   
            </div>
            
             <SearchBook search={search} booksSearch={booksSearch} changeSheif={changeSheif} loadSearch = {loadSearch}/>  
            
          </div>
          
    </div>
  )
}

export default Search
