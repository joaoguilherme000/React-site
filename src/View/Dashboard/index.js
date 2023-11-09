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
          <button className="imagens" >Pagina 1</button>
          <button className="local" >Pagina 2</button>
        </div>
        <button className="banco" >Pagina 3</button>
      </div>
    </div>
    </>
    )
  };
