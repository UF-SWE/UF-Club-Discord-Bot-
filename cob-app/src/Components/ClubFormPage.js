// ClubFormPage.js

import React, { useState } from 'react';
import { db } from '../firebase-config';
import {doc, collection, addDoc, updateDoc, setDoc } from 'firebase/firestore';
import './ClubFormPage.css';


const docRef = doc(db, "Schools/university of florida");

function ClubFormPage() {
  const [clubData, setClubData] = useState({
    name: '',
    announcement: '',
    members: '',
    president: ''
  
  });
  const prevClub = clubData;
  const handleChange = (e) => {
    setClubData({ ...prevClub, [e.target.name]: e.target.value });
  };
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async () => {
    try {
      // Send data to Firebase Firestore
      
      await setDoc(docRef, {
        
          [clubData.name]: {
            // Nested fields for the club
            ["info"]:{
              emails: clubData.announcement,
              phones : clubData.members,
              websites: {},
            },
            members: clubData.members,
            posts: {}
            
           
            // Add other fields as needed
          }
        } , {merge:true});
     
      console.log('Club data sent successfully!');
      setClubData({
        name: clubData.name,
        announcement: clubData.announcement
      });
    } catch (error) {
      console.error('Error sending club data: ', error);
    }
    setSubmitted(true);
  };
  


  return (
  <div className = "signup-form">
  {submitted ? (
        <div className="submitted-text">
           <img src="./Images/largerSignUp.jpg">
          </img>
          <div className='content'> 
            <p>Submitted</p>
            <a href="https://discord.com/oauth2/authorize?client_id=1223186510174621737&permissions=19235279808593&scope=bot" style={{ color: 'white' }}>Invite bot to Discord</a>
          </div>
         
        </div>
      ) : (
        <>
    <img src="./Images/largerSignUp.jpg">
    </img>
    <div className='content'>
      <h2>Club Signup Form</h2>
      <form>
        <div className='form-group'>
          <label htmlFor="name">Club Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={clubData.name}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="announcement">Announcement:</label>
          <textarea
            id="announcement"
            name="announcement"
            value={clubData.announcement}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor="members">Members:</label>
          <textarea
            id="members"
            name="members"
            value={clubData.members}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor="president">President:</label>
          <textarea
            id="president"
            name="president"
            value={clubData.president}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </>
    )}
 </div>
      
  );
}

export default ClubFormPage;
