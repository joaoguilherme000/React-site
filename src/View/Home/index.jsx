import './index.css'
import '../../Style/Reset.css'

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home () {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/CapituloUm');
  };

  const handleDeclaration = () => {
    navigate('/Declaracao');
  };
  
  const handleConfig = () => {
    navigate('/Configuracao');
  };

  return (
    <body className="tela">
      <main className="playable">
        <h1 className="fade-in">Crimem la morte: dois corações</h1>
        <h2 className="choosePlay" onClick={handlePlayClick}>Jogar</h2>
        <h2 className="choosePlay" onClick={handleDeclaration}>Declaração</h2>
        <h3 className="chooseConfig" onClick={handleConfig}>Configurações</h3>
      </main>
    </body>
  )
};
