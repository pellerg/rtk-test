import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import authApi from './services/authService';
import authReducer from './features/authSlice';
import LoginForm from './LoginForm';

const queryClient = new QueryClient();

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

console.log("csa")

const App: React.FC = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          {/* Other routes */}
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </Provider>
);

export default App;
