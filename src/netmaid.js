import React from 'react';
import netmaidLogo from './Assets/netmaidLogo.png';
import './FloatingSideButton.css';

const FloatingSideButton = () => {
  return (
    <a href="https://www.facebook.com/ArdenArtistryByPlants/" target="_blank" rel="noreferrer noopener" className="floating-button">
    <div className="buttonContainer">
        <img src={netmaidLogo} alt="NetMaid Logo" className="netmaid-logo" />
    </div>
    </a>
  );
};

export default FloatingSideButton;