import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './View/Home';
import CapituloUm from './View/CapituloUm';
import Declaracao from './View/Declaracao';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CapituloUm" element={<CapituloUm/>} />
        <Route path="/Declaracao" element={<Declaracao/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;