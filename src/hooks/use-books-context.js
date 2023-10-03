import { useContext } from "react";
import BooksContext from "../context/books";


// the custom hooks means that 
// the function we write to make reusable bits of logic
// the function become hooks 
// and we can use it in several different components
// custom hook will use the react hooks

function useBooksContext () {
    return useContext(BooksContext);
}


export default useBooksContext; 