import '../../Style/Reset.css'
import './index.css'

import { useNavigate } from 'react-router-dom';

export default function Declaracao () {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/CapituloUm');
  };

  return (
    <body className="merdinha">
      <section>
        <h1 className="declara">ESSE JOGO FOI FEITO COM INTUITO DE SER UMA PIADA OFENSIVA E SE VOCE FICA OFENDIDINHO SEU MERDA ENTÃO CAI FORA PORQUE NÃO É PRA VOCE</h1>
        <div className="suastica"></div>
      </section>
    </body>
  )
};
