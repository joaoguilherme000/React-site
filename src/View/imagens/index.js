import Header from '../../Components/Header';

export default function Imagens () {
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
                <label>Documento</label>
                <div className='document'>
                    <img/>
                    <h3>Categoria</h3>
                    <h3>Data</h3>
                    <h3>Preço</h3>
                    <h3>URL: </h3>
                </div>
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