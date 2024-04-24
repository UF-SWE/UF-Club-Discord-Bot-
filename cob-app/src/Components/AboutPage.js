
import React from 'react';
import './About.css';
function AboutPage() {
  return (
    <div className ="about-container">
      <img src="./Images/aboutGator.png">
      </img>
      <div className='overlay'></div>
      <div className="content"> 
        <h2>About Us</h2>
        <p>The goal for C.O.B. is to connect clubs here at the University of Florida to one single hub. 
          By serving as a central platform, C.O.B. facilitates seamless communication and collaboration among various student organizations, 
          fostering a vibrant and interconnected campus community. With C.O.B., clubs can easily share resources, coordinate events, and collaborate
          on initiatives, ultimately enhancing the overall student experience and enriching campus life. Whether it's organizing club fairs, promoting
          leadership development opportunities, or facilitating cross-club projects, C.O.B. is dedicated to empowering student leaders and strengthening
          the bonds between clubs, ensuring that every student finds their place and thrives within our diverse and dynamic university ecosystem.
        </p>
      </div>
    </div>
    
  );
}

export default AboutPage;
