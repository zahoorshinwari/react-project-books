import {useState} from 'react'
import axios from 'axios';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';


function App() {

    const [books , setBooks] = useState ([]);


    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            } 

            return book;
        });

        setBooks(updatedBooks);
    }


    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            
            return book.id !== id; 
        })
        setBooks(updatedBooks);
    }
    



    // it work like event handler
    const createBook = async (title) => {
        
        const response = await axios.post('http://localhost:3001/books' , {
            title: title

        })
        console.log(response);


            // creating the new books
        const updatedBooks = [...books,response.data];
        
            // here we are updat   ing the state
        setBooks(updatedBooks)
    }
    return ( 
                <div className='app'>
                    <h1>Reading List</h1>
                <BookList onEdit={editBookById} books={books}  onDelete={deleteBookById} />
                {/* when user want to create the book then the below function will call */}
                <BookCreate onCreate={createBook  }/>
                </div>
            )
    }    
    export default App; 
