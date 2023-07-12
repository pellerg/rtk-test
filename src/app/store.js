import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { authApi } from "./services/auth/authService";
import { spaceApi } from "./services/space/spaceService";
import spaceReducer from "../features/space/spaceSlice";

import { mwApi_all } from "./services/mwApi_all";
import { mwApi } from "./services/mwApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    space: spaceReducer,
    [spaceApi.reducerPath]: spaceApi.reducer,
    [mwApi_all.reducerPath]: mwApi_all.reducer,
    [mwApi.reducerPath]: mwApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(spaceApi.middleware)
      .concat(mwApi_all.middleware)
      .concat(mwApi.middleware),
});

export default store;
