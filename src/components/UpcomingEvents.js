import React, { useEffect, useState } from 'react';
import './UpcomingEvents.css'


const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/schedule')
      .then(response => response.json())
      .then(data => {
        const upcoming = data.slice(0, 9); // show top 9 events for the grid (3x3)
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
            <img src={event.show.image?.medium} alt={event.show.name} className="event-image" />
            <h3>{event.show.name}</h3>
            <p><strong>Airdate:</strong> {event.airdate}</p>
            <p><strong>Episode:</strong> {event.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;