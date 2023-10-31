import Header from "../../Components/Header";
import './index.css'


export default function Dashboard () {
    return (
    <>
    <Header/>
    <div className="conteudo">
      <h1 className="titulo">Escolha</h1>
      <div className="button-container">
        <div className="linha">
          <button className="imagens" >Imagens</button>
          <button className="local" >Localizações</button>
        </div>
        <button className="banco" >Banco</button>
      </div>
    </div>
    </>
    )
  };
