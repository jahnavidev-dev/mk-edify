// src/components/FrontPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css';

const FrontPage = () => {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('admin123');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === 'admin123') {
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1 className="brand-name">Edify</h1>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>

          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account? <span>Sign Up</span>
          </p>
        </form>
      </div>

      <div className="login-right">
        <img src="/images/login-banner.png" alt="Login Banner" />
        <div className="overlay-text">UNLOCK YOUR POTENTIAL,<br />ONE LESSON AT A TIME.</div>
      </div>
    </div>
  );
};

export default FrontPage;
