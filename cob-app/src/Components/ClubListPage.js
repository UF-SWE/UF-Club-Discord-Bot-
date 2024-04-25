import React from 'react';
import './ClubListPage.css'
function ClubListPage() {
  // Static list of clubs with images
  const clubs = [
    {
      id: 1,
      name: 'Florida Comedy Club',
      imageUrl: './Images/carl.jpg', // Replace with actual image URL
      description: 'Monthly stand-up comedy at UF, Weekly open mics and joke critiques',
    },
    {
        id: 2,
        name: 'IEEE',
        imageUrl: './Images/ieee.jpg', // Replace with actual image URL
        description: 'Institute of Electrical and Electronic Engineers - Events and Community for ECE students',
      },
    {
        id: 3,
        name: 'WECE',
        imageUrl: './Images/wece.png', // Replace with actual image URL
        description: 'Women in Electrical and Computer Engineering - Events and Community for women in ECE',
    },
    
  
    
 
    
  
    // Add more clubs as needed
  ];

  return (
    <div>
      <h2 >Club Board</h2>
      <ul className="club-list">
        {clubs.map(club => (
          <li className="club-item"key={club.id}>
            <h3>{club.name}</h3>
            {club.imageUrl && <img src={club.imageUrl} alt={club.name} style={{ height: '200px', maxWidth: '200px' }} />}
            <p>{club.description}</p>
            {/* Add more club details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubListPage;
