import React from 'react';
import { useSelector } from 'react-redux';
import { AuthState } from './features/authSlice';

const HomePage: React.FC = () => {
  const isLoggedIn = useSelector((state: AuthState) => state.isLoggedIn);

  if (!isLoggedIn) {
    return null; // Ha a felhasználó nincs bejelentkezve, ne jelenjen meg semmi a HomePage komponens helyett
  }

  return (
    <div>
      <h1>Welcome to the HomePage!</h1>
      {/* Ide teheted a többi tartalmat és komponenst a felhasználói kezdőlapodhoz */}
    </div>
  );
};

export default HomePage;
