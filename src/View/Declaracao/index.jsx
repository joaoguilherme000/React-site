import '../../Style/Reset.css'
import './index.css'

import { useNavigate } from 'react-router-dom';

export default function Declaracao () {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <body>
      <section className="merdinha">
        <h1 className="declara">ESSE JOGO FOI FEITO COM INTUITO DE SER UMA PIADA OFENSIVA E SE VOCE FICA OFENDIDINHO SEU MERDA ENTÃO VAI SE FUDE 😊</h1>
        <div className="homeButton" onClick={handleBackClick}>Voltar</div>
        <div className="suastica"></div>
      </section>
    </body>
  )
};
