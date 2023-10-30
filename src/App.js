import './Style/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./View/Login";
import NoPage from "./View/Teste";
import Dashboard from "./View/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
