 import { useState , useContext } from "react";
 import BooksContext from "../context/books";

function BookCreate() {
    const [title , setTitle] = useState('');
    
    // here using the context
    const {createBook} = useContext(BooksContext)


    const handleChange = (event) =>{
        setTitle(event.target.value)  
    }

    const handleSubmit = (event) => {
        // it is used that the form can't submit automatically
        event.preventDefault();

        createBook(title);
        // when user click then again assign empty string to input
        setTitle('');
    };

    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input"  value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>
    </div>
}

export default BookCreate;