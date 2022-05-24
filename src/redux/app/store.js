import {configureStore} from "@reduxjs/toolkit";
import bookReducer  from "../features/book/bookSlice";
import authReducer from '../features/auth/authSlice';
import postReducer from '../features/post/postSlice';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        posts: postReducer,
        bookmarks: bookReducer
    }
});