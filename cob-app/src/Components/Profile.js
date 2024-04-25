import React from 'react';
import { useNavigate } from "react-router-dom";



function ProfilePage({user, setUser}) {
  const nav = useNavigate()
  const handleLogout = () => {
    // Clear the user state
    setUser( 
      {
      email: '',
      school: 'UF',
      club: 'N/A',
      announcment: "N/A"
    });
    // Redirect to the login page (assuming it has the path '/login')
    nav('/login')
  };
  return (
    <div>
      <div>
        <h3>Email/Username: {user.email} </h3>
        <p>School: {user.school} </p>
        <p>Club: {user.club}</p>
        <p>Announcement: {user.announcment} </p>
        <button onClick={handleLogout}>Logout</button>
        
        
      </div>
    </div>
  );
}

export default ProfilePage;
