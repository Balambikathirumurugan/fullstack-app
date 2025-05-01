import React, { useEffect, useState } from 'react';
import './RecommendedShows.css'


const Recommended = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        const selectedShows = data.slice(0, 8); // You can display up to 8 shows
        setShows(selectedShows);
      })
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div className="recommended-container">
      <h2>Recommended Shows ➝</h2>
      <div className="scrollable-row">
        {shows.map(show => (
          <div key={show.id} className="show-item">
            <img src={show.image?.medium} alt={show.name} className="show-image" />
            <h3>{show.name}</h3>
            <p dangerouslySetInnerHTML={{ __html: show.summary?.slice(0, 100) + '...' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;