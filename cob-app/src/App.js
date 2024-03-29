import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ClubListPage from './Components/ClubListPage';
import Navbar from './Components/NavBar'
import './App.css';
import logo from './logo.svg';
import ClubFormPage from './Components/ClubFormPage';

function App() {
  const defaultCenter = { lat: 32, lng: -82 }; 
  const defaultZoom = 10;
  const [user, setUser] = useState(null); // State for storing user information
  

  return (
    <Router>
      <div className="App">
      <Navbar user={user} setUser={setUser} />
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/clublist" element={<ClubListPage />} />
          <Route path="/club-form" element={<ClubFormPage />} />
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
