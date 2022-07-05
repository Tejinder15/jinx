import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {loginUser,signupUser,followUser,unfollowUser,editProfile,editBio} from "../../thunks/authThunk";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user",JSON.stringify(action.payload.user));
      localStorage.setItem("token",action.payload.token);
    },
    [loginUser.rejected]: (state,action) => {
      toast.error(action.payload);
    },
    [signupUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    [signupUser.rejected]: (state, action) => {
      console.error(action.payload);

    },
    [followUser.fulfilled]: (state, action) => {
      state.user.following = action.payload;
    },
    [followUser.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.user.following = action.payload;
    },
    [unfollowUser.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [editProfile.fulfilled]: (state, action) => {
      state.user.profile = action.payload;
    },
    [editProfile.rejected]: (state, action) => {
      console.error(action.payload);
    },
    [editBio.fulfilled]: (state, action) => {
      state.user.bio = action.payload;
    },
    [editBio.rejected]: (state, action) => {
      console.error(action.payload);
    },
  },
});

export const {logoutUser} = authSlice.actions;

export default authSlice.reducer;