import Header from "../../Components/Header";
import './index.css'

import { useNavigate } from 'react-router-dom';

function DashboardChoose ({ handleNavigation, WhatPage }) {

  const Pagina1Navigate = () => {
    handleNavigation(1);
  };

  const Pagina2Navigate = () => {
    handleNavigation(2);
  };

  const Pagina3Navigate = () => {
    handleNavigation(3);
  };

  return (
    <div className="conteudo">
    <h1 className="titulo">Escolha</h1>
    <div className="button-container">
      <div className="linha">
        <button className="imagens" onClick={Pagina1Navigate}>Pagina 1</button>
        <button className="local" onClick={Pagina2Navigate}>Pagina 2</button>
      </div>
      <button className="banco" onClick={Pagina3Navigate}>Pagina 3</button>
    </div>
  </div>
  );
}

export default function Dashboard () {

  const navigate = useNavigate();

  const handleNavigation = (WhatPage) => {
    if (WhatPage === 1) {
      navigate('/Pagina 1');
    } else if (WhatPage === 2) {
      navigate('/Pagina 2');
    } else if (WhatPage === 3) {
      navigate('/Pagina 3');
    }
  };

    return (
    <>
    <Header/>
    <DashboardChoose handleNavigation={handleNavigation} />
    </>
    )
  };
