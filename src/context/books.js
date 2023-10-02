// context is the communication channel
// it is used to share data between the components 
// any type of data can become shared.


import { createContext , useState } from "react";

// bookscontext has two components
// provider (this component used to specify that what data we want to share)
// consumer (used to get access to data.)

const BooksContext = createContext();



// the below are custom provider
function Provider ({ children }) {

    // create the useState
    const [count , setCount] = useState(5);

    // the below are object 
    const valueToShare = {
        count: count , 
        incrementCount: () => {
            setCount(count + 1);
        },
    };
    return <BooksContext.Provider value={valueToShare} >
        {children}
    </BooksContext.Provider>
}


// export the custom provider to use in other component
export {Provider};

export default BooksContext;