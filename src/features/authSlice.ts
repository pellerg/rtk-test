import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
  

export interface AuthState {
  user: User | null;
  userToken: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}

interface User {
  id: string;
  email: string;
  access_token: string
}

const initialState: AuthState = {
  user: null,
  userToken,
  isLoggedIn: false,
  isLoading: false,
  error: "error van",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      console.log("Login success az actionben")
      state.user = action.payload;
      state.userToken = action.payload.access_token
    },


    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log("login error: " )
      console.log(state.error)
    },
    logout: (state) => {
      localStorage.removeItem('userToken') // delete token from storage
      state.userToken=null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const selectError = (state: AuthState) => state.error;

export default authSlice.reducer;
