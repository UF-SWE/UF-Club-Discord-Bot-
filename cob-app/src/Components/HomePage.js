import React from 'react';
import './HomePage.css';
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="header-text">
        <h1>Welcome to C.O.B.</h1>
        <p>The club organization bot for the University of Florida</p>
      </div>

      <div className="image-gallery">
        <div className="image-container">
          <img src="./Images/clubEx1.jpg" alt="Image 1" />
          <p>Academic</p>
        </div>

        <div className="image-container">
          <img src="./Images/clubEx2.jpg" alt="Image 2" />
          <p>Community</p>
        </div>

        <div className="image-container">
          <img src="./Images/clubEx3.jpg" alt="Image 3" />
          <p>Sports</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
