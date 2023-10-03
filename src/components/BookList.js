import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";



// the below are custom hook
// which has tiny small logic in it 
// and we are using it.
function BookList() {
    const {books} = useBooksContext();

    

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