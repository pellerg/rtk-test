import { createSlice } from '@reduxjs/toolkit'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  sandboxSpaces: null,
  userToken,
}

const authSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {    
    
}
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
