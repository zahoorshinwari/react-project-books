import { useState , useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book , onSubmit}) {
    const [title , setTitle] = useState(book.title);

    // use the context
    const { editBookById } = useContext(BooksContext);


    const handleChange = (event) => {
        setTitle(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();

       

        // it is used to show again the title after editing
        onSubmit();
        editBookById(book.id , title);

    }

    return <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary" >
            Save
        </button>
    </form>
}

export default BookEdit;