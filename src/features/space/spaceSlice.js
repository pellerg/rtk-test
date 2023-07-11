import { createSlice } from "@reduxjs/toolkit";

// initialize access_token from local storage
const access_token = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : null;

const initialState = {
  sandboxSpaces: null,
  access_token,
};

const authSlice = createSlice({
  name: "space",
  initialState,
  reducers: {},
});

export const { logout, setCredentials } = authSlice.actions;

export default authSlice.reducer;
