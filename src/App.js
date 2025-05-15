import React from 'react';
import Header from './frontend/Header';
import Navbar from './frontend/Navbar';
import Banner from './frontend/Banner';
import './App.css';
import RecommendedShows from './frontend/RecommendedShows';
import UpcomingEvents from './frontend/UpcomingEvents';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <RecommendedShows />
      <UpcomingEvents />
    </div>


  );

  
}

export default App;