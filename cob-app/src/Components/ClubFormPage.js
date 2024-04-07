// ClubFormPage.js

import React, { useState } from 'react';
import { db } from '../firebase-config';
import { collection, addDoc } from 'firebase/firestore';



const clubsRef = collection(db, 'ClubData');
function ClubFormPage() {
  const [clubData, setClubData] = useState({
    name: '',
    announcement: ''
  });
  
  const handleChange = (e) => {
    setClubData({ ...clubData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // Send data to Firebase Firestore
      await addDoc(clubsRef, {
        name: clubData.name,
        announcement: clubData.announcement
        // Add other fields as needed
      });
      console.log('Club data sent successfully!');
      setClubData({
        name: '',
        announcement: ''
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
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={clubData.description}
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
