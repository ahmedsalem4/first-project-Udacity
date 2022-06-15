import React from 'react';
import { Link } from 'react-router-dom';
import ContainerBook from './childeComponents/ContainerBook';


const Home = (props) => {
   
  let allBook = props.allBook;
  let changeSheif = props.changeSheif;
    return (
    <div>
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {<ContainerBook nameSection="CurrentlyReading" allBook={allBook} category="currentlyReading" changeSheif={changeSheif}/>}
                {<ContainerBook nameSection="WantToRead" allBook={allBook} category="wantToRead" changeSheif={changeSheif}/>}
                {<ContainerBook nameSection="Read" allBook={allBook} category="read" changeSheif={changeSheif}/>}
              
              </div>
            </div>
            <div className="open-search">
              <Link to="/Search" >Add a book</Link>
            </div>
          </div>
    </div>
  )
}

export default Home
