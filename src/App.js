import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './View/Login';
import NoPage from './View/NoPage';
import Dashboard from './View/Dashboard';

import Imagens from './View/Imagens';
import Local from './View/Local';
import Banco from './View/Banco/';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Imagens" element={<Imagens/>} />
        <Route path="/Local" element={<Local/>} />
        <Route path="/Banco" element={<Banco/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;