import Header from '../../Components/Header';
import './index.css'

export default function Local () {
    return (
        <>
        <Header/>
        <section className='processando'>
            <div className='esquerda'>
                <h2 className='titulo'>Enviar</h2>
                <h3>Certeza?</h3>
                <div>
                    <button>Sim</button>
                    <button>Não</button>
                </div>
            </div>
            <div className='direita'>
                <h2 className='titulo'>Recebido</h2>
                <label>Documento</label>
                <div className='document'>
                    <h3>Localização: </h3>
                </div>
                <div>
                    <button>Autorizar</button>
                    <button>Refatorar</button>
                </div>
            </div>
        </section>
        <section className='lista'>
        <div className='esquerda'>
            <h2>Historico</h2>
            <h3>Documento</h3>
            <div>
                <button>option</button>
                <button>(user)</button>
                <button>date</button>
            </div>
            </div>
            <div className='direita'>
                <h2>Recebido</h2>
                <button>Documento</button>
                <div>
                    <button>Autorizar</button>
                    <button>Refatorar</button>
                </div>
            </div>
        </section>
        </>
    );
}