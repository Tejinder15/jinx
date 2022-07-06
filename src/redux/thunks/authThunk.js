import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const loginUser = createAsyncThunk(
  "auth/login",
  async ({username,password},{rejectWithValue}) => {
    try {
      const response = await axios.post("/api/auth/login", {username,password});
      toast.success('Logged In',{
            style: {
            borderRadius: '4px',
            background: '#333',
            color: '#fff',
            },
        }
        );
      return {
          user: response.data.foundUser,
          token: response.data.encodedToken
      };
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const signupUser = createAsyncThunk(
  "auth/signup",
  async (newUserData) => {
    try {
      const response = await axios.post("/api/auth/signup", newUserData);
      return {
          user: response.data.createdUser,
          token: response.data.encodedToken
      }
    } catch (error) {
      return error;
    }
  }
);

const editProfile = createAsyncThunk("auth/editProfile",async({user,obj,token})=>{
  try {
    await axios.post("/api/users/edit",{userData:user},{headers:{authorization:token}});
    return obj.profileImg;
  } catch (error) {
    return error;
  }
});

const editBio = createAsyncThunk("auth/editBio",async({newBio,token})=>{
  try {
    const response = await axios.post("/api/users/edit",{userData:{bio:newBio}},{headers:{authorization:token}});
    toast.success('Edited Bio',{
            style: {
            borderRadius: '4px',
            background: '#333',
            color: '#fff',
            },
        }
        );
    return response.data.user.bio;
  } catch (error) {
    return error;
  }
});

const followUser = createAsyncThunk("users/follow",async({followingId,token})=>{
  try {
    const response = await axios.post(`/api/users/follow/${followingId}`,
        {},
        { headers: { authorization: token } });
        toast.success('Followed User',{
            style: {
            borderRadius: '4px',
            background: '#333',
            color: '#fff',
            },
        }
        );
        return response.data.user.following;
  } catch (error) {
    return error;
  }
});

const unfollowUser = createAsyncThunk("users/unfollow",async({followingId,token})=>{
  try {
    const response = await axios.post(`/api/users/unfollow/${followingId}`,
        {},
        { headers: { authorization: token } });
        toast.success('Unfollowed User',{
            style: {
            borderRadius: '4px',
            background: '#333',
            color: '#fff',
            },
        }
        );
        return response.data.user.following;
  } catch (error) {
    return error;
  }
});

export {loginUser,signupUser,editProfile,editBio,followUser,unfollowUser};