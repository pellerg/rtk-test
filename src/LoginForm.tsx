import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, selectError } from './features/authSlice';
import { useLoginMutation, User, Credentials } from './services/authService';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const loginError = useSelector(selectError)
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: '',
  });
  const [login, { isLoading, isError, error,  isSuccess }] = useLoginMutation();

  interface Credentials {
    email: string;
    password: string;
  }

  // const [ login, { mutate, isLoading, isError, error,  isSuccess } ] = useLoginMutation<User, unknown, Credentials>(
  //   (credentials) => authApi.login(credentials),
  //   {
  //     onSuccess: (user) => {
  //       dispatch(loginStart());
  //       setIsSuccess(true);
  //     },
  //     onError: (error) => {
  //       setErrorMessage('Invalid username or password.');
  //     },
  //   }
  // );


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());
    login(credentials);
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log("isSuccess: " + isSuccess)
    console.log("isError: " + isError)
  }, [isSuccess, isError]);

  return (
    <div className="login-container">
    
    <div className="login-title">
        MW login
    </div>
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Log In'}
      </button>
      {isSuccess && <div className="success-message">Login successful!</div>}
      {error && <div className="error-message">{loginError}</div>}
    </form>
    </div>
  );
};

export default LoginForm;
