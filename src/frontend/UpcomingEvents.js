import React, { useEffect, useState } from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/upcoming') // ✅ Fixed the wrong endpoint
      .then(response => response.json())
      .then(data => {
        const upcoming = data.slice(0, 9);
        setEvents(upcoming);
      })
      .catch(error => console.error('Error fetching upcoming events:', error));
  }, []);

  return (
    <div className="upcoming-events-container">
      <h2>Upcoming Events ➝ </h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <img
              src={event.image || "https://via.placeholder.com/300x400?text=No+Image"}
              alt={event.show_name}
              className="event-image"
            />
            <h3>{event.show_name}</h3>
            <p><strong>Airdate:</strong> {event.airdate}</p>
            <p><strong>Episode:</strong> {event.episode_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
