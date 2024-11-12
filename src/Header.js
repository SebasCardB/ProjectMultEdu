// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  const goBack = () => {
    window.history.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  const goHome = () => {
    window.location.href = '/'; // Redirige a la pantalla principal
  };

  return (
    <header className="header">
      <button onClick={goBack} className="nav-button"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg></button>
      <button onClick={goHome} className="nav-button"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M160-120v-392.33l-80 61-40-53.34L480-840l440 336-40 52.33-80-60.66V-120H160Zm66.67-66.67h506.66v-376.66L480-756.33l-253.33 193v376.66Zm0 0h506.66-506.66ZM320-360q-17 0-28.5-11.5T280-400q0-17 11.5-28.5T320-440q17 0 28.5 11.5T360-400q0 17-11.5 28.5T320-360Zm160 0q-17 0-28.5-11.5T440-400q0-17 11.5-28.5T480-440q17 0 28.5 11.5T520-400q0 17-11.5 28.5T480-360Zm160 0q-17 0-28.5-11.5T600-400q0-17 11.5-28.5T640-440q17 0 28.5 11.5T680-400q0 17-11.5 28.5T640-360Z"/></svg></button>
      <button onClick={goForward} className="nav-button"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></button>
    </header>
  );
};

export default Header;
