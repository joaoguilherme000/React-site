import Header from "../../Components/Header";
import './index.css'

import { useNavigate } from 'react-router-dom';

function DashboardChoose ({ handleNavigation, WhatPage }) {

  const imagens = () => {
    handleNavigation(1);
  };

  const local = () => {
    handleNavigation(2);
  };

  const banco = () => {
    handleNavigation(3);
  };

  return (
    <div className="conteudo">
    <h1 className="titulo">Escolha</h1>
    <div className="button-container">
      <div className="linha">
        <button className="imagens" onClick={imagens}>Pagina 1</button>
        <button className="local" onClick={local}>Pagina 2</button>
      </div>
      <button className="banco" onClick={banco}>Pagina 3</button>
    </div>
  </div>
  );
}

export default function Dashboard () {

  const navigate = useNavigate();

  const handleNavigation = (WhatPage) => {
    if (WhatPage === 1) {
      navigate('/imagens');
    } else if (WhatPage === 2) {
      navigate('/local');
    } else if (WhatPage === 3) {
      navigate('/banco');
    }
  };

    return (
    <>
    <Header/>
    <DashboardChoose handleNavigation={handleNavigation} />
    </>
    )
  };
