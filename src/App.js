import { useEffect , useContext} from 'react'
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';

function App() {

    // here use the use context 
    const {fetchBooks} =  useContext (BooksContext);



    // the below are the useEffect 
    // it is used to run the code when a components is initially 
    // rendered and (sometimes) when it is rerendered
    // it has two argument 
    // 1) function that contain code we want to run
    // 2) second is array or nothing
    // the empty array are used that we will call the above fetchdata function only one time
    // the second argument are going to control exactly when the arrow function gets called
    useEffect(() => {
        fetchBooks();
    } , [fetchBooks]);


    return ( 
        <div className='app'>
            <h1>Reading List</h1>
        <BookList  />
        <BookCreate />
        </div>
    )

   
    }    
    export default App; 



