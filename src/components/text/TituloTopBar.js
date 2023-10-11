import './Style.css';
import React, { useState } from 'react';

export default function TituloTopBar () {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const drop = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <h2>Eu odeio java</h2>
      <div className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
        <button onClick={drop}>Tutoriais</button>
        <ul>
          <li>Tutorial 1</li>
          <li>Tutorial 2</li>
        </ul>
      </div>
    </>
  );
}