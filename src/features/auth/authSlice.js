import { createSlice } from "@reduxjs/toolkit";
import { userLogin, refreshJWTToken } from "./authActions";

// initialize access_token from local storage
const access_token = localStorage.getItem("access_token")
  ? localStorage.getItem("access_token")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  access_token: null,
  expires: null,
  refresh_token: null,
  error: null,
  success: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("access_token"); // delete token from storage
      state.loading = false;
      state.userInfo = null;
      state.access_token = null;
      state.error = null;
      state.isLoggedIn = false;
    },
    setCredentials: (state, { payload }) => {
      console.log("setCredentials payload:");
      console.log(payload);
      state.userInfo = payload;
    },
    setTokens: (state, action) => {
      if (action.payload) {
        const { access_token, expires } = action.payload;
        state.access_token = access_token;
        state.expires = expires;
      }
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      // state.userInfo = payload
      state.access_token = payload.access_token;
      state.expires = payload.expires;
      state.refresh_token = payload.refresh_token;
      state.isLoggedIn = true;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    // [registerUser.pending]: (state) => {
    //   state.loading = true
    //   state.error = null
    // },
    // [registerUser.fulfilled]: (state, { payload }) => {
    //   state.loading = false
    //   state.success = true // registration successful
    // },
    // [registerUser.rejected]: (state, { payload }) => {
    //   state.loading = false
    //   state.error = payload
    // },
  },
});

export const refreshTokenIfNeeded = () => async (dispatch, getState) => {
  setInterval(async () => {
    const { expires, refresh_token } = getState().auth;

    const currentDate = Date.now();
    const currentExpDate = new Date(Number(expires) * 1000);
    const currDateTime = new Date(currentDate).getTime();
    const currExpDateTime = currentExpDate.getTime();
    const diffTime = ((currDateTime - currExpDateTime) / 1000 / 60) * -1;

    if (refresh_token && Math.round(diffTime) <= 0) {
      try {
        // Call the action to refresh the token
        const response = await dispatch(refreshJWTToken(refresh_token));
        // Update the tokens in the Redux store
        dispatch(setTokens(response.payload));
      } catch (error) {
        // Handle error refreshing tokens
        console.log(error);
      }
    }
  }, 10000);
};

export const { logout, setCredentials, setTokens } = authSlice.actions;

export default authSlice.reducer;
