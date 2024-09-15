import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPage from './loginPage';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@umgidealab.com' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/man-user');
      setError('Your email or password is incorrect');
    }
  };

  return (
    <LoginPage
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleLogin={handleLogin}
    />
  );
};

export default Index;