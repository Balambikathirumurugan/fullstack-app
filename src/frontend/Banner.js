import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner.svg';

function Banner() {
  return (
    <div className="banner">
        <div class="overlay"></div>
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-text">
        <h1>Discover Exciting Events Happening<br/>       
        Near You - Stay Tuned for Updates!</h1>
        <p>"Embark on a journey of discovery with Event Hub.<br />Explore, experience, and embrace the endless possibilities of local events nearby."</p>
      </div>
    </div>
  );
}

export default Banner;