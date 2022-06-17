import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadmypost } from "../../Utils/loadmypost";

const getAllPosts = createAsyncThunk("posts/allPosts",async()=>{
    try {
        const response = await axios.get("/api/posts");
        return response.data.posts;
    } catch (error) {
        return error;
    }
});

const addPost = createAsyncThunk("posts/addPost",async({post,token}) => {
    try {
        const response = await axios.post("/api/posts",{postData:post},{headers:{authorization:token}});
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

const editPost = createAsyncThunk("posts/editPost",async({editMyPost,token}) => {
    try {
        const response = await axios.post(`/api/posts/edit/${editMyPost.id}`,{postData:{content:editMyPost.content}},{headers:{authorization:token}});
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
        return error;
    }
});

const dislikePost = createAsyncThunk("posts/dislikePost",async({postid,token})=>{
    try {
        const response = await axios.post(`/api/posts/dislike/${postid}`,{},{headers:{authorization:token}});
        return response.data.posts;
    } catch (error) {
        return error;
    }
});

const addComment = createAsyncThunk("posts/addComment",async({postId,token,comment})=>{
    try {
        const response = await axios.post(`/api/comments/add/${postId}`,{commentData:comment},{headers:{authorization:token}});
        return response.data.posts;
    } catch (error) {
        return error;
    }
});

const delComment = createAsyncThunk("post/delComment",async({postId,commentId,token})=>{
    try {
        const response = await axios.post(`/api/comments/delete/${postId}/${commentId}`,{},{headers:{authorization:token}});
        return response.data.posts;
    } catch (error) {
        return error;
    }
});

export {getAllPosts,addPost,delPost,editPost,likePost,dislikePost,addComment,delComment};