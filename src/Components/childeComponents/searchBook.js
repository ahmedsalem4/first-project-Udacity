import React , {Component}from 'react'
import Book from './Book'
class searchBook extends Component  {

    render(){
        return (

            <ul className="books-grid">
                {
                    this.props.search.length ?  (
                    this.props.booksSearch.map( (book) =>(

                          <div key={book.id}>
                          <Book book={book} changeSheif={this.props.changeSheif}/>
                         </div>
                    )
      
                       
                       )
                    ) :null
                }
                </ul>
     
      )
    }
  
}

export default searchBook
