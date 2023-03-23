import { createSlice } from "@reduxjs/toolkit";

const userInfoFromStorage = localStorage.getItem("UserInfo")
  ? JSON.parse(localStorage.getItem("UserInfo"))
  : null;


const initialState = {
  userInfo: userInfoFromStorage,
  reason:null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
        state.userInfo = action.payload.data;
      },
    userLoginFailed: (state, action) => {
        state.reason = action.payload.data
    },
    setLogout: (state, action) => {
        state.userInfo = null;
    }
  },
});

export const {
    setLogin,
    userLoginFailed,
    setLogout
} = authSlice.actions;

export default authSlice.reducer;