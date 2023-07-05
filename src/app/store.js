import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { authApi } from './services/auth/authService'
import { spaceApi } from './services/space/spaceService'
import spaceReducer from '../features/space/spaceSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    space: spaceReducer,
    [spaceApi.reducerPath]: spaceApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(spaceApi.middleware)
})

export default store
