import './index.css'

export default function Janela () {
    return (
        <div className='content'>
            <h2>Login</h2>
            <form name="cadastro" className='janela'>

                <label for="usuario" className='nome'>Nome: </label>
                <input type="text" name="usuario" id="usuario" className="nome-input"/>

                <label for="senha" className='senha'>Senha: </label>
                <input type="password" name="senha" id="senha" required className="senha-input"/>

                <input type="submit" value="Enviar" className='entrar'/>
            </form>
            <h5><a href=''>Esqueci a senha?</a></h5>
        </div>
    );
}