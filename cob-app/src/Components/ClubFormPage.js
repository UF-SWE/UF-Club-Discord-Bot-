// ClubFormPage.js

import React, { useState } from 'react';
import { db } from '../firebase-config';
import {doc, collection, addDoc, updateDoc, setDoc } from 'firebase/firestore';



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

  const handleSubmit = async () => {
    try {
      // Send data to Firebase Firestore
      
      await setDoc(docRef, {
        clubs: {
          [clubData.name]: {
            // Nested fields for the club
            announcement: clubData.announcement,
            members : clubData.members,
            president : clubData.president
           
            // Add other fields as needed
          }
        }
      }, {merge:true});
      console.log('Club data sent successfully!');
      setClubData({
        name: clubData.name,
        announcement: clubData.announcement
      });
    } catch (error) {
      console.error('Error sending club data: ', error);
    }
  };

  return (
    <div>
      <h2>Club Signup Form</h2>
      <form>
        <div>
          <label htmlFor="name">Club Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={clubData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="announcement">Announcement:</label>
          <textarea
            id="announcement"
            name="announcement"
            value={clubData.announcement}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="members">Club Size:</label>
          <textarea
            id="members"
            name="members"
            value={clubData.members}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="president">President:</label>
          <textarea
            id="president"
            name="president"
            value={clubData.president}
            onChange={handleChange}
          ></textarea>
        </div>
        {/* Add your other form fields here */}
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ClubFormPage;
