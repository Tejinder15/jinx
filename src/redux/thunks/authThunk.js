import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginUser = createAsyncThunk(
  "auth/login",
  async ({username,password}) => {
    try {
      const response = await axios.post("/api/auth/login", {username,password});
      return {
          user: response.data.foundUser,
          token: response.data.encodedToken
      };
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  }
);

const followUser = createAsyncThunk("users/follow",async({followingId,token})=>{
  try {
    const response = await axios.post(`/api/users/follow/${followingId}`,
        {},
        { headers: { authorization: token } });
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
        return response.data.user.following;
  } catch (error) {
    return error;
  }
});

export {loginUser,signupUser,followUser,unfollowUser};