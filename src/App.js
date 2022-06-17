
  import React  , {useState , useEffect } from 'react';

  import * as BooksAPI from './BooksAPI';
  import {BrowserRouter ,   Route, Routes} from "react-router-dom";
  import Home from './Components/Home';
  import Search from './Components/Search';

  


 
  const App = () => { 
   
    
    const [allBooks , setAllBooks] = useState([]);
    const [search , setSearch] = useState("");
    const [booksSearch , setBooksSearch] = useState([]);
    

    const getBook = () =>{
      BooksAPI.getAll().then(
        (res)=>{ 
          setAllBooks(res); 
  
        });
  }
  useEffect(getBook,[]);

  
    

    const changeSheif = async (book,sheif) => {
        await BooksAPI.update(book,sheif) ;
        await BooksAPI.getAll().then( 
          (res) => {
            setAllBooks(  res );
          })
        }

    const handleSearch = async (event) =>{
      await setSearch( event.target.value);

        if(search.length){
          handleFormSearch(search)
        }
        
    };
  
    const handleFormSearch = async (search) =>{
      BooksAPI.search(search).then( 
          (data)=>{
            setBooksSearch( data);
    
          }
          
      )
      
    }

    
    
 
      return (
        
        <BrowserRouter>
          <div className="app">
            <   Routes >
              <Route path='/'  element={<Home allBook={allBooks} changeSheif = {changeSheif} />}  />
              <Route path='/Search'  element={<Search handleSearch = {handleSearch}
                search = {search} booksSearch={booksSearch}
                changeSheif = {changeSheif} />}  />
            </   Routes >
          </div>
        </BrowserRouter>
 
    ); 
    
      
  }

  export default App;  
  