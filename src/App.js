import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import './App.css';
import RecommendedShows from './components/RecommendedShows';
import UpcomingEvents from './components/UpcomingEvents';

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