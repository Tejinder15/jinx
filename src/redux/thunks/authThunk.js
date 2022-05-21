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

export {loginUser,signupUser};