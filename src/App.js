import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './View/Home';
import CapituloUm from './View/CapituloUm';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CapituloUm" element={<CapituloUm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;