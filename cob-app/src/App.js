import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import SignUpPage from './Components/SignUpPage';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ClubListPage from './Components/ClubListPage';
import './App.css';
import logo from './logo.svg';

function App() {
  const defaultCenter = { lat: 32, lng: -82 }; 
  const defaultZoom = 10;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/clublist" element={<ClubListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
