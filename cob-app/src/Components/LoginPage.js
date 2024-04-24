import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import ClubFormPage from './ClubFormPage.js';
import  { Link } from "react-router-dom"
import {signInWithEmailAndPassword } from 'firebase/auth';


import { auth } from "../firebase-config.js"
import './LoginPage.css'
function LoginPage({setUser, user}) {
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const nav = useNavigate();
  const prevUser = user;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with:', email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        setUser({...prevUser,
          email: email.slice(0, email.length-8).toLocaleUpperCase()});
        setError('');
        setIsLoggedIn(true);
        nav('/club-form');
      })
      .catch((error) => {
        console.log(error);
  
        setError('Incorrect Username or Password.')
      });
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='logon-form' onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      
    </div>
  );
}

export default LoginPage;
