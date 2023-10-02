import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {

    // here is the context used
    const {books} = useContext(BooksContext);

    

    const renderedBooks = books.map ((book) => {
        // the props are used that which book are used to display
        return (
            <BookShow  key={book.id}  book={book} />
        );
    });
    
     return (
     <div className="book-list"> 
        {renderedBooks}
     </div>
     )
    }
 
export default BookList; 