import { createSlice } from '@reduxjs/toolkit'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  sandboxSpaces: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {    
    setCredentials: (state, { payload }) => {
      console.log("setCredentials payload:")
      console.log(payload)
      state.userInfo = payload
    },
}
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
