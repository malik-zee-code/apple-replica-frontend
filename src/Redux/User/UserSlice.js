import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  userData: {},
  token: "",
  error: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return {
        isLoggedin: action.payload.isLoggedin,
        userData: action.payload.userData,
        token: action.payload.token,
        error: action.payload.error,
      };
    },
    registerUser: (state, action) => {
      return {
        isLoggedin: action.payload.isLoggedin,
        userData: action.payload.userData,
        token: action.payload.token,
        error: action.payload.error,
      };
    },
    fetchUser: (state, action) => {
      return {
        isLoggedin: action.payload.isLoggedin,
        userData: action.payload.userData,
        token: action.payload.token,
        error: action.payload.error,
      };
    },
  },
});

export const UserActions = UserSlice.actions;

export default UserSlice.reducer;
