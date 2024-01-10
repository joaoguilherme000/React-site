import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './View/Home';
import CapituloUm from './View/CapituloUm';
import Declaracao from './View/Declaracao';
import Configuracao from './View/Config';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CapituloUm" element={<CapituloUm/>} />
        <Route path="/Declaracao" element={<Declaracao/>} />
        <Route path="/Configuracao" element={<Configuracao/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;