import React, { useState } from 'react';
import  { Link } from "react-router-dom"
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase-config.js"
import './LoginPage.css'
function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with:', email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='login-container'>
      <img src="./Images/largerSignUp.jpg" alt="Sign Up" className="signup-image">
      </img>
      <h2>Sign Up</h2>
      <form className='login-form' onSubmit={handleSubmit}>
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
        <button type="submit"> SignUp </button>
       
      </form>
    </div>
  );
}

export default SignUpPage;
