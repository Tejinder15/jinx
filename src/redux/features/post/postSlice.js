import { createSlice } from "@reduxjs/toolkit";
import {getAllPosts,addPost,delPost,editPost,likePost,dislikePost} from "../../thunks/postThunk";

const initialState = {
    posts:[]
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{},
    extraReducers: {
        [getAllPosts.fulfilled]:(state,action) => {
            state.posts = action.payload;
            console.log(state.posts);
        },
        [getAllPosts.rejected]:(state,action)=>{
            console.error(action.payload);
        },
        [addPost.fulfilled]:(state,action) => {
            state.posts = action.payload;
        },
        [addPost.rejected]:(state,action) => {
            console.error(action.payload);
        },
        [delPost.fulfilled]:(state,action) => {
            state.posts = action.payload;
        },
        [delPost.rejected]:(state,action) => {
            console.error(action.payload);
        },
        [editPost.fulfilled]:(state,action) => {
            state.posts = action.payload;
        },
        [editPost.rejected]:(state,action) => {
            console.error(action.payload);
        },
        [likePost.fulfilled]:(state,action) => {
            state.posts = action.payload;
        },
        [likePost.rejected]:(state,action) => {
            console.error(action.payload);
        },
        [dislikePost.fulfilled]:(state,action) => {
            state.posts = action.payload;
        },
        [dislikePost.rejected]:(state,action) => {
            console.error(action.payload);
        },
        
    }
});

export default postSlice.reducer;