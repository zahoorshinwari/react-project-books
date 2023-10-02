// context is the communication channel
// it is used to share data between the components 
// any type of data can become shared.


import { createContext , useState } from "react";
import axios from "axios";

// bookscontext has two components
// provider (this component used to specify that what data we want to share)
// consumer (used to get access to data.)

const BooksContext = createContext();



// the below are custom provider
function Provider ({ children }) {
    const [books , setBooks] = useState ([]);
  
    // this is used to refresh the page to show all the books list
    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }


     // doing changes in books
     const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
        title: newTitle    
        });


        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                // here we can edit the book title directly
                // return { ...book, title: newTitle };

                // here we are editing the book title and take it's all 
                // editable information 
                return {...book, ...response.data};
            } 

            return book;
        });

        setBooks(updatedBooks);
    }



    // deleting the books
    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3001/books/${id}`);

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
            // creating the new books
        const updatedBooks = [...books,response.data];
        
            // here we  are updat   ing the state
        setBooks(updatedBooks)
    }


    const valueToShare = {
        books: books,
        deleteBookById: deleteBookById,
        editBookById: editBookById,
        createBook: createBook,
        fetchBooks: fetchBooks
    }

    return (
        <BooksContext.Provider value={valueToShare} >
            {children}
        </BooksContext.Provider>
    )
}


// export the custom provider to use in other component
export {Provider};

export default BooksContext;