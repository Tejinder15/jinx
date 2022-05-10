import { createContext,useContext,useReducer,useEffect } from "react";
import { useAuth } from "../AuthContext/auth-context";
import { bookReducer } from "../../Reducer/book-reducer";
import { loadBookmarks } from "../../Utils/loadBookmarks";

const defaultValue = {bookmarks:[]};

const BookContext = createContext(defaultValue);

const BookMarkProvider = ({children}) => {
    const [bookmarkState,bookmarkDispatch] = useReducer(bookReducer,defaultValue);
    const {authState:{token}} = useAuth();

    useEffect(()=>{
        loadBookmarks(token,bookmarkDispatch);
        //eslint-disable-next-line
    },[]);

    return(
        <BookContext.Provider value={{bookmarkState,bookmarkDispatch}}>
            {children}
        </BookContext.Provider>
    );
};

const useBookmark = () => useContext(BookContext);

export {BookMarkProvider,useBookmark};