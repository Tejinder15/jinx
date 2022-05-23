import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllBookmark = createAsyncThunk('bookmark/getAllBookmark',async({token})=>{
    try {
        const response = await axios.get('/api/users/bookmark',{headers:{authorization:token}});
        return response.data.bookmarks;
    } catch (error) {
        console.error(error);
    }
});

const addBookmark = createAsyncThunk('bookmark/addBookmark',async({postid,token})=>{
    try {
        const response = await axios.post(`/api/users/bookmark/${postid}`,{},{headers: {authorization:token}});
        return response.data.bookmarks;
    } catch (error) {
        console.error(error);
    }
});

const delBookmark = createAsyncThunk('bookmark/delBookmark',async({postid,token})=>{
    try {
        const response = await axios.post(`/api/users/remove-bookmark/${postid}`,{},{headers:{authorization:token}});
        return response.data.bookmarks;
    } catch (error) {
        console.error(error);
    }
});

export {getAllBookmark,addBookmark,delBookmark};
