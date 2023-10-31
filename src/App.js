import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './View/Login';
import NoPage from './View/NoPage';
import Dashboard from './View/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;