import React from 'react';

const Book = (props) =>  {
  const boky = props.book;
  let changeSheif = props.changeSheif;

  let ahmed = (event) => {
    changeSheif(boky , event.target.value);
  
    
  }
     

    return ( 
      <div> 
            <div key={boky.id}> 
              <div className="book">
                  <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${boky.imageLinks  ? boky.imageLinks.smallThumbnail: ""   })`}}></div>
                  <div className="book-shelf-changer">
                      <select onChange={ahmed} value={boky.sheif}>
                      <option value="move" >Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                      </select>
                  </div>
                  </div>
                  <div className="book-title">{boky.title}</div> 
                  <div className="book-authors">{boky.authors} </div>
                   
              </div>
              </div>
         
                 
      </div>
    )
  

  
}

export default Book ;


