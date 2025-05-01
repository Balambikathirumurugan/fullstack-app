import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1 style={{ color: 'crimson', margin: 12, fontSize: '20px' }}>BookUsNow</h1><br />
          <span style={{ fontSize: '15px', color: '#666' }}>
            <i className="fas fa-map-marker-alt" style={{ color: 'red', marginRight: '2px' }}></i>📍 (Goa, India)
          </span>
        </div>


        <div className="top-bar">
  <button className="category-button">☰ Categories</button>
  <input
    type="text"
    className="search-box"
    placeholder="Enter Event Name...                                                                                                                          🔍"
  />
</div>
      </div>

      <div className="right-section">
        <span className="favorites">♥ Favorites</span>
        <button className="signin-btn">Sign In</button>
      </div>
    </div>
  );
}

export default Header;