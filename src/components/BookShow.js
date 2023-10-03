import { useState } from "react";
import BookEdit from "./BookEdit";
import './Content.css'
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
    // this state is used to show the edited books 
    const [showEdit, setShowEdit] = useState(false);

    // use the context
    const { deleteBookById } = useBooksContext();



    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }


    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };


    // it is used to show again the book title when edited
    // when handleSubmit pass to bookEdit then the onEdit is already pass to it.
    const  handleSubmit = () => {
        setShowEdit(false); 
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit}  book={book}/>
    }


    return <div className="book-show">

        {/* make the request from the below url and show the image 
            and there width is 300 and height is 200 */}
        <img 
            alt="books"
            src={`https://picsum.photos/seed/${book.id}/300/300`}
        />
        
            <div className="content">
                {content}
            </div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
}

export default BookShow;