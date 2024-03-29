import React from 'react';
import './ClubListPage.css'
function ClubListPage() {
  // Static list of clubs with images
  const clubs = [
    {
      id: 1,
      name: 'Florida Comedy Club',
      imageUrl: './Images/carl.jpg', // Replace with actual image URL
      description: 'Monthly stand-up comedy at UF',
    },
    {
        id: 2,
        name: 'Florida Comedy Club',
        imageUrl: './Images/carl.jpg', // Replace with actual image URL
        description: 'Monthly stand-up comedy at UF',
      },
    {
        id: 3,
        name: 'Florida Comedy Club',
        imageUrl: './Images/carl.jpg', // Replace with actual image URL
        description: 'Monthly stand-up comedy at UF',
    },
    
  
    
 
    
  
    // Add more clubs as needed
  ];

  return (
    <div>
      <h2 >Club List</h2>
      <ul className="club-list">
        {clubs.map(club => (
          <li className="club-item"key={club.id}>
            <h3>{club.name}</h3>
            {club.imageUrl && <img src={club.imageUrl} alt={club.name} style={{ maxWidth: '200px' }} />}
            <p>{club.description}</p>
            {/* Add more club details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClubListPage;
