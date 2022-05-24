import { createSlice } from "@reduxjs/toolkit";
import { getAllBookmark,addBookmark,delBookmark } from "../../thunks/bookThunk";

const initialState = {bookmarks:[]};

const bookSlice = createSlice({
    name:"bookmarks",
    initialState,
    reducers:{},
    extraReducers:{
        [getAllBookmark.fulfilled]:(state,action) => {
            state.bookmarks = action.payload;
        },
        [getAllBookmark.rejected]:(state,action) => {
            console.error(action.payload);
        },
        [addBookmark.fulfilled]:(state,action) => {
            state.bookmarks = action.payload;
        },
        [addBookmark.rejected]:(state,action) => {
            console.error(action.payload);
        },
        [delBookmark.fulfilled]:(state,action) => {
            state.bookmarks = action.payload;
        },
        [delBookmark.rejected]:(state,action) => {
            console.error(action.payload);
        }
    }
});

export default bookSlice.reducer;