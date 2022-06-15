
  import React , {Component } from 'react';

  import * as BooksAPI from './BooksAPI';
  import {BrowserRouter ,   Route, Routes} from "react-router-dom";
  import Home from './Components/Home';
  import Search from './Components/Search';
  


 
  class App extends Component {
   
    state = {
    
      allBooks : [],
      search : "",
      booksSearch : [],
   
    }
   componentDidMount(){

    BooksAPI.getAll().then(
      (res)=>{ 
        this.setState({ allBooks : res }); 

      });            
    }

    changeSheif = async (book,sheif) => {
        await BooksAPI.update(book,sheif) ;
        await BooksAPI.getAll().then( 
          (res) => {
            this.setState( {allBooks:res } );
          })
        }
    handleSearch = async (event) =>{
      await this.setState(
        {search: event.target.value}
        );

        if(this.state.search.length){
          this.handleFormSearch(this.state.search)
        }
        
    };
    handleFormSearch = async (search) =>{
      BooksAPI.search(search).then( 
          (data)=>{
            this.setState({booksSearch : data});
    
          }
          
      )
      
    }
    
   //this.changeSheif(this.state.allBooks.id,this.state.allBooks.sheif);
    render(){
 
      return (
        
        <BrowserRouter>
          <div className="app">
            <   Routes >
              <Route path='/'  element={<Home allBook={this.state.allBooks} changeSheif = {this.changeSheif} />}  />
              <Route path='/Search'  element={<Search handleSearch = {this.handleSearch}
                search = {this.state.search} booksSearch={this.state.booksSearch}
                changeSheif = {this.changeSheif} 
                loadSearch={this.state.loadSearch}/>}  />
            </   Routes >
          </div>
        </BrowserRouter>
 
    ); 
    }
      
  }

  export default App;  
  