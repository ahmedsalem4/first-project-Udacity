import React,{Component} from 'react'

class Book extends  Component{

  ahmed = (event) => {
    this.props.changeSheif(this.props.book, event.target.value);
  
    
  }
     

  render(){

    return ( 
      <div> 
            <div key={this.props.book.id}> 
              <div className="book">
                  <div className="book-top">
                   <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail   })` }}></div>
                  <div className="book-shelf-changer">
                      <select onChange={this.ahmed} value={this.props.book.sheif}>
                      <option value="move" >Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                      </select>
                  </div>
                  </div>
                  <div className="book-title">{this.props.book.title}</div>
                  <div className="book-authors">{this.props.book.authors} </div>
                   
              </div>
              </div>
         
                 
      </div>
    )
  }

  
}

export default Book


/**
 * 
 * 
   imageLinks:
smallThumbnail: "http://books.google.com/books/content?id=P_lzbHj_jS0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
thumbnail: "http://books.google.com/books/content?id=P_lzbHj_jS0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"  
            

imageLinks:
smallThumbnail: "http://books.google.com/books/content?id=7n2gw9MbTMUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
thumbnail: "http://books.google.com/books/content?id=7n2gw9MbTMUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 */