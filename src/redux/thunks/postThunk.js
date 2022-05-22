import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadmypost } from "../../Utils/loadmypost";

const getAllPosts = createAsyncThunk("posts/allPosts",async()=>{
    try {
        const response = await axios.get("/api/posts");
        console.log(response);
        return response.data.posts;
    } catch (error) {
        console.error(error);
    }
});

const addPost = createAsyncThunk("posts/addPost",async({post,token}) => {
    try {
        const response = await axios.post("/api/posts",{postData:post},{headers:{authorization:token}});
        console.log(response);
        return response.data.posts;
    } catch (error) {
        return error;
    }
});

const delPost = createAsyncThunk("posts/delPost",async({postid,token,setMyPosts,username})=>{
    try {
        const response = await axios.delete(`/api/posts/${postid}`,{headers:{authorization:token}});
        loadmypost(username,setMyPosts);
        return response.data.posts;
    } catch (error) {
        return error;
    }
});

const editPost = createAsyncThunk("posts/editPost",async({postData,token}) => {
    try {
        const response = await axios.post(`/api/posts/edit/${postData._id}`,{postData},{headers:{authorization:token}});
        console.log(response);
        return response.data.posts;
    } catch (error) {
        return error;
    }
})

const  likePost = createAsyncThunk("posts/likePost",async({postid,token})=>{
    try {
        const response = await axios.post(`/api/posts/like/${postid}`,{},{headers:{authorization:token}});
        console.log(response);
        return response.data.posts;
    } catch (error) {
        console.error(error);
    }
});

const dislikePost = createAsyncThunk("posts/dislikePost",async({postid,token})=>{
    try {
        const response = await axios.post(`/api/posts/dislike/${postid}`,{},{headers:{authorization:token}});
        console.log(response);
        return response.data.posts;
    } catch (error) {
        return error;
    }
});

export {getAllPosts,addPost,delPost,editPost,likePost,dislikePost};