import Header from '../../Components/Header';
import './index.css'

export default function Local () {
    return (
        <>
        <Header/>
        <section className='processando'>
            <div className='esquerda'>
                <h2>Enviar</h2>
                <h3>Certeza?</h3>
                <div>
                    <button>Sim</button>
                    <button>Não</button>
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
        <section className='lista'>
        <div className='esquerda'>
                <h2>Enviar</h2>
                <h3>Certeza?</h3>
                <div>
                    <button>Sim</button>
                    <button>Não</button>
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